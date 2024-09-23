---
title: Signallar
tags:
  - signallar
  - kill
---
Linux operatsion tizimida signallar bor. Ba'zan ularni bilib, ba'zan bilmay ishlatasiz. `Ctrl + D` ni bosib terminal dasturdan chiqasiz. `Ctrl + C` ni bosib dasturni interrupt qilasiz.

UNIX-like tizim ishlatsangiz terminalingizni oching va `ps` buyrug'ini yuboring. U sizga hozir ishlab turgan protsesslar ro'yxatini beradi. Oddiyroq qilib aytsak, qachon kompyuteringizda dastur ishga tushirganingizda har bir dastur har xil protsessda ishlaydi. 

PID, TTY, TIME, CMD kabi columnlar beradi. CMD - dastur, PID esa process ID degani. Istalgan PID raqamni tanlang. Endi esa uni to'xtatishni istasangiz, kill buyrug'idan foydalanasiz. Masalan mana bunday:

```
kill -SIGNAL PID
```

Signal qismiga uni nima qilishni kiritasiz, misol uchun to'xtat demoqchi bo'lsangiz -3, yoki -9. 

```
kill -9 13488
```

Har bir signalni o'z [ma'nosi](https://www.tutorialspoint.com/unix/unix-signals-traps.htm) bor. Ba'zan dasturni to'xtatib qo'yishingiz ham mumkin. Va keyinroq kelgan joyidan davom ettirishni aytishingiz ham mumkin. Endi dasturlardan chiqish uchun X buttonni emas balkim terminal orqali `kill` buyrug'ini ishlatsangiz va o'zingizni hacker-dek tutsangiz bo'ladi :) 

>Aslo maqola [@otabekswe](https://t.me/otabekswe) Telegram kanalidan olindi. 

Ingliz tilini biladiganlar uchun ushbu [signals - kill command](https://youtu.be/mIcdOWq4MME?si=2XwOlCoZU7h4evz5) rolikni ko'rishni maslahat beraman.