"""
Telegram Personal Assistant Bot — @myasistant_shobola_bot
Faqat owner (OWNER_ID) ishlatishi mumkin.
"""
import logging
import os
from dotenv import load_dotenv

from telegram import Update
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    MessageHandler,
    CallbackQueryHandler,
    TypeHandler,
    filters,
)

from database.db import init_db
from handlers.handlers import (
    start_handler, menu_handler, help_handler,
    remind_command, list_reminders,
    addtask_command, list_tasks, donetask_command,
    note_command, list_notes, findnote_command,
    send_command, add_contact_command, list_contacts,
    translate_command, rewrite_command,
    search_command, plan_command, templates_command,
    free_text_handler, callback_handler,
)
from utils import scheduler
from utils.owner_guard import owner_middleware, OWNER_ID

load_dotenv()

logging.basicConfig(
    format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)


async def _guard(update: Update, context):
    """TypeHandler — har qanday update dan oldin ishlaydi"""
    allowed = await owner_middleware(update, context)
    if not allowed:
        # PTB ga shu update ni to'xtatishni aytamiz
        context.application.stop_processing_update = True


def main():
    token = os.getenv("BOT_TOKEN")
    if not token:
        raise ValueError("BOT_TOKEN topilmadi!")
    if not OWNER_ID:
        raise ValueError("OWNER_ID topilmadi!")

    init_db()

    app = ApplicationBuilder().token(token).build()

    # ── Owner guard (birinchi o'rinda, group=-999) ─────────
    app.add_handler(TypeHandler(Update, _guard), group=-999)

    # ── Commands ──────────────────────────────────────────
    app.add_handler(CommandHandler("start",      start_handler))
    app.add_handler(CommandHandler("menu",       menu_handler))
    app.add_handler(CommandHandler("help",       help_handler))

    app.add_handler(CommandHandler("remind",     remind_command))
    app.add_handler(CommandHandler("reminders",  list_reminders))
    app.add_handler(CommandHandler("today",      list_reminders))

    app.add_handler(CommandHandler("addtask",    addtask_command))
    app.add_handler(CommandHandler("tasks",      list_tasks))
    app.add_handler(CommandHandler("donetask",   donetask_command))

    app.add_handler(CommandHandler("note",       note_command))
    app.add_handler(CommandHandler("notes",      list_notes))
    app.add_handler(CommandHandler("findnote",   findnote_command))

    app.add_handler(CommandHandler("send",       send_command))
    app.add_handler(CommandHandler("addcontact", add_contact_command))
    app.add_handler(CommandHandler("contacts",   list_contacts))
    app.add_handler(CommandHandler("templates",  templates_command))

    app.add_handler(CommandHandler("translate",  translate_command))
    app.add_handler(CommandHandler("rewrite",    rewrite_command))
    app.add_handler(CommandHandler("plan",       plan_command))
    app.add_handler(CommandHandler("search",     search_command))

    # ── Callbacks & free text ─────────────────────────────
    app.add_handler(CallbackQueryHandler(callback_handler))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, free_text_handler))

    # ── Scheduler ─────────────────────────────────────────
    scheduler.init(app)

    logger.info(f"Bot ishga tushdi. Owner: {OWNER_ID}")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
