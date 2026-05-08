"""
Owner Guard — faqat OWNER_ID ga ruxsat beradi.
Boshqa birov bot topsa ham ishlatib bilmaydi.
"""

import os
import logging
from functools import wraps
from telegram import Update
from telegram.ext import ContextTypes

logger = logging.getLogger(__name__)

OWNER_ID = int(os.getenv("OWNER_ID", "0"))

BLOCKED_MSG = (
    "Bu bot shaxsiy foydalanish uchun sozlangan.\n"
    "Siz uchun ruxsat yo'q."
)


def owner_only(func):
    """Decorator — faqat owner ishlatishi mumkin"""
    @wraps(func)
    async def wrapper(update: Update, context: ContextTypes.DEFAULT_TYPE, *args, **kwargs):
        user_id = update.effective_user.id if update.effective_user else 0
        if user_id != OWNER_ID:
            logger.warning(f"Unauthorized access attempt: user_id={user_id}")
            if update.callback_query:
                await update.callback_query.answer(
                    "Ruxsat yo'q!", show_alert=True
                )
            elif update.message:
                await update.message.reply_text(BLOCKED_MSG)
            return
        return await func(update, context, *args, **kwargs)
    return wrapper


async def owner_middleware(update: Update, context: ContextTypes.DEFAULT_TYPE) -> bool:
    """
    TypeHandler sifatida ishlatiladi.
    True qaytarsa — davom etadi, False — bloklanadi.
    """
    user_id = update.effective_user.id if update.effective_user else 0
    if user_id == OWNER_ID:
        return True

    logger.warning(f"Blocked unauthorized user: {user_id}")
    if update.callback_query:
        await update.callback_query.answer("Ruxsat yo'q!", show_alert=True)
    elif update.message:
        await update.message.reply_text(BLOCKED_MSG)
    return False
