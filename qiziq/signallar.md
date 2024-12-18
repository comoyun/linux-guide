---
title: Signallar
tags:
  - signallar
  - kill
---
Linux-da "signallar" degan tushuncha mavjud. Ularning ba'zilarini o'zimiz sezmasdan ishlatamiz. Masalan, terminalda, `Ctrl + D` tugmalarini bosib, dasturdan chiqishingiz mumkin. Yoki `Ctrl + C` bilan dasturni to'xtatishingiz mumkin. Dasturga signal yuborishning eng oddiy ko'rinishlaridan biri shular.

## Protsesslar 

Agar UNIX-like tizimdan foydalanayotgan bo'lsangiz, terminalni oching va quyidagi buyruqni kiriting:

```bash
$ ps
```

`ps` hozir tizimda ishlayotgan barcha protsesslarning ro'yxatini ko'rsatadi. Protsesslar - kompyuterda ishlayotgan dasturlar.

`ps` buyrug'i quyidagi ustunlarni ko'rsatadi: 
- `PID` - bu protsessning identifikatsiya raqami (Process ID)
- `TTY` - protsessning qaysi terminal orqali ishga tushirilganini bildiradi
- `TIME` - protsess ishlayotgan vaqt
- `CMD` - qaysi dastur yoki buyruq ishlayotganini ko'rsatadi

Masalan:

```bash
  PID TTY          TIME CMD
  1234 pts/0    00:00:03 bash
  5678 pts/0    00:00:01 top
  9101 pts/1    00:00:00 vim
```

Bu yerda `bash`, `top`, va `vim` dasturlari ishlayapti, ularning `PID` raqamlari esa 1234, 5678 va 9101.

## `kill` buyrug'i

Agar biror protsessni ya'ni dasturni to'xtatmoqchi bo'lsangiz, o'sha protsessning `PID` raqamini bilishingiz kerak. Masalan, yuqorida ko'rsatilgan `PID` raqamidan foydalanamiz:

```bash
$ kill -SIGNAL PID
```

Bu yerda `SIGNAL` qismiga siz qanday signal yuborishingizni belgilaysiz. Signal protsessga nima qilish kerakligini aytadi. Masalan, **majburiy** to'xtatish signali `-9` qiymati bilan ifodalanadi:

```bash
$ kill -9 1234
```

Ba'zi hollarda siz protsessni to'xtatib (pauza qilish) qo'yishingiz va keyinchalik uni davom ettirishingiz ham mumkin.

## Signal turlari

Linuxda har bir signalning o'z vazifasi bor. Eng ko'p ishlatiladigan signallar quyidagilar:
- `-9` - protsessni majburan to'xtatadi
- `-15` - protsessni muloyimlik bilan to'xtatadi
- `-3` - protsessni pauzaga qo'yadi

Har bir signalning to'liq ro'yxatini va nima vazifani bajarishini o'rganish uchun [bu yerga](https://www.tutorialspoint.com/unix/unix-signals-traps.htm) qarashingiz mumkin.

---

Dasturlardan chiqish uchun doimo o'ng yuqoridagi "X" tugmachasini bosish shart emas. Terminal orqali `kill` buyrug'idan foydalanib, o'zingizni xakerdek his qiling. 

Agar ingliz tilini bilsangiz, ushbu [video darslikni](https://youtu.be/mIcdOWq4MME?si=2XwOlCoZU7h4evz5) ko'rishni tavsiya qilaman.