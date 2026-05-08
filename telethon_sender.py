"""
Telethon userbot — sizning shaxsiy akkauntingiz orqali xabar yuboradi.
Istalgan kontaktga (username, telefon, chat_id) yoza oladi.

Birinchi marta ishga tushirganda telefon raqam + SMS kod so'raydi.
Keyin session.session faylda saqlanadi va qayta so'ralmaydi.
"""

import os
import logging
from telethon import TelegramClient
from telethon.errors import (
    FloodWaitError, PeerFloodError,
    UsernameNotOccupiedError, PhoneNumberBannedError
)

logger = logging.getLogger(__name__)

API_ID    = int(os.getenv("TELEGRAM_API_ID", "0"))
API_HASH  = os.getenv("TELEGRAM_API_HASH", "")
PHONE     = os.getenv("TELEGRAM_PHONE", "")

SESSION_FILE = "assistant_userbot"

_client: TelegramClient = None


async def get_client() -> TelegramClient:
    global _client
    if _client and _client.is_connected():
        return _client
    _client = TelegramClient(SESSION_FILE, API_ID, API_HASH)
    await _client.start(phone=PHONE)
    logger.info("Telethon client connected")
    return _client


async def send_to_contact(recipient: str, text: str) -> dict:
    """
    recipient: username (@alijon), telefon (+998901234567) yoki chat_id (123456)
    text: yuborilinadigan xabar matni
    Returns: {"ok": True} yoki {"ok": False, "error": "..."}
    """
    try:
        client = await get_client()
        # Raqam bo'lsa int ga o'tkazish
        if isinstance(recipient, str) and recipient.lstrip("+-").isdigit():
            target = int(recipient)
        else:
            target = recipient

        await client.send_message(target, text)
        logger.info(f"Message sent to {recipient}")
        return {"ok": True}

    except FloodWaitError as e:
        logger.warning(f"FloodWait: {e.seconds}s")
        return {"ok": False, "error": f"Telegram {e.seconds} soniya kutishni so'radi. Keyinroq urinib ko'ring."}

    except PeerFloodError:
        return {"ok": False, "error": "Telegram spam filtri ishga tushdi. Biroz kuting."}

    except UsernameNotOccupiedError:
        return {"ok": False, "error": f"@{recipient} topilmadi."}

    except Exception as e:
        logger.error(f"Telethon send error: {e}")
        return {"ok": False, "error": str(e)}


async def resolve_username(username: str) -> dict:
    """Username orqali chat_id va to'liq ismni topadi"""
    try:
        client = await get_client()
        entity = await client.get_entity(username)
        return {
            "ok": True,
            "chat_id": entity.id,
            "name": getattr(entity, "first_name", "") + " " + getattr(entity, "last_name", ""),
            "username": getattr(entity, "username", ""),
        }
    except Exception as e:
        return {"ok": False, "error": str(e)}


async def disconnect():
    global _client
    if _client:
        await _client.disconnect()
        _client = None
