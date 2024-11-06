---
tags:
  - foydali
title: 08 - Foydali Ma'lumotlar
description: Linux-da terminalga oid ayrim faktlar va foydali buyruqlar bilan tanishamiz.
sort: 8
---
## Global o'zgaruvchilar

Global o'zgaruvchilarni yodlash maqsadga muvofiq bo'ladi:

| O'zgaruvchi | Tavsif |
| :--- | :--- |
| `$HOME` | Joriy foydalanuvchining "uy" katalogi. Misol: `/home/khumoyun/` |
| `$PATH` | Bajariladigan (executable) fayllar ro'yxati. |
| `$PWD` | Hozirgi terminal ish-joy katalogi |
| `$RANDOM` | Tasodifiy raqam - 0dan 32767gacha |
| `$UID` | Joriy foydalanuvchining identifikatori. |
| `$PS1` | [$PS1 variable](https://www.warp.dev/blog/whats-so-special-about-ps1) |
| `$PS2` | - |

O'zgaruvchilarni ekranga chiqarish (muhit - *Google Cloud Shell*):

```bash
$ echo $PATH
/home/khumoyun/.local/bin:/opt/gradle/bin:/opt/maven/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/go/bin:/usr/local/rvm/bin:/google/go_appengine:/google/google_appengine:/google/migrate/anthos/:/home/khumoyun/.gems/bin:/usr/local/rvm/bin:/home/khumoyun/gopath/bin:/google/gopath/bin:/google/flutter/bin:/usr/local/nvm/versions/node/v20.10.0/bin
```

## Exit / chiqish kodlari

Har bir buyruq **chiqish kodini** qaytaradi. Muvaffaqiyatli buyruq har doim "0" ni qaytaradi va muvaffaqiyatsiz buyruq noldan farqli qiymatlarni qaytaradi. Muvaffaqiyatsizlik kodlari 1 dan 255 gacha bo‘lgan musbat sonlardir.

Skript yozishda foydalanishimiz mumkin bo‘lgan yana bir qulay buyruq - ’exit’. Hech qanday argumentlarsiz ’exit’ buyrug‘ini ishga tushirish ishlayotgan skriptni tugatadi va ’exit’ dan oldin bajarilgan oxirgi buyruqning chiqish kodini qaytaradi.

Dastur tugagach, **chiqish kodi** `$?` o'zgaruvchisiga yoziladi. Dastur muvaffaqiyatli bajarilganini aniqlash uchun: `echo $?` buyrug'ini berasiz.

## Kommentlar / Izohlar

Izohlar asosan kod ichiga yoziladi. Ular manba kodini odamlarga tushunishni osonlashtirish maqsadida qo'yiladi va odatda kompilyatorlar tomonidan e'tiborga olinmaydi (bu degani, kommentlarni dasturga hech qanday ta'siri yo'q). Kommentlarni terminalda ham yozish mumkin, lekin u hech qanday amalni bajarmaydi:

```bash
$ # lalalalalala
$
```

Siz kommentlarni uzunroq buyruqlarning vazifalarini tushuntirish uchun ishlatishingiz mumkin:

```bash
$ ls -lht ~ | head -n 5 # Uy katalogidagi fayllarni o'zgartirish vaqti bo'yicha filterlash - yuqoridagi 5tasini ko'rsatadi
```

## Linux - `read`

Bu buyruq `stdin`dan o'zgaruvchilarga kiritilgan ma'lumotlarni o'qiydi. Qo'llanilishi bunday:

```bash
read [-ers] [-a massiv] [-d chegaralovchi] [-i matn] [-n nchars] [-N nchars]
     [-p prompt] [-t vaqt] [-u fd] [ozgaruvchi1 ...] [ozgaruvchi2 ...]
```

Agar oʻzgaruvchi nomlari koʻrsatilmagan boʻlsa, kiritilgan maʼlumotlar `$REPLY` oʻzgaruvchisida saqlanadi.

```bash
#!/bin/bash

read # malumot kiritilishini kutadi
echo $REPLY # kiritilgan malumotni chop etadi
```

| Optsiya | To'liq Nomi | Tavsifi |
| :--: | :--- | :--- |
| `-a` | array/massiv | So'zlarni indekslangan massivda saqlaydi |
| `-e` |  | ["-e" optsiyasi ](https://www.baeldung.com/linux/read-command) |
| `-d` | delimiter/chegaralovchi | Chegaralovchi o'rnatadi |
| `-n` | nchars | **n** ta belgilar o‘qilgandan so‘ng o‘qishni to‘xtatadi |
| `-N` | nchars | **n** belgilar yoki EOF o‘qilgandagina o‘qishni to‘xtatadi, chegarani e’tiborsiz qoldiradi |
| `-p` | prompt | Konsolda prompt satrini chop etadi |
| `-i` | interactive | Foydalanuvchi o'zgartirishi mumkin bo'lgan to'ldiruvchi matnni chop etadi. `-e` bilan birgalikda ishlatiladi |
| `-r` | raw input | $ va * kabi maxsus belgilarning talqinini o'chirib qo'yadi |
| `-s` | silent/sokin | ["-s" optsiyasi ](https://www.baeldung.com/linux/read-command) |
| `-t` | timeout/turib-turish | Chiqishdan oldin ma'lum vaqt kutadi |
| `-u` | file descriptor | ["-u" optsiyasi ](https://www.baeldung.com/linux/read-command) |

```bash
#!/bin/bash

read -p 'Ismingni kirit: ' name

read -sp 'Endi kodni kirit: ' password

if [ "$password" == "1234" ] && [ "$name" == "Toshbolta" ]; then
   echo -e "\nTo'g'ri, sen xaqiqiy Toshboltasan!"
else
   echo -e "\nYo'q, sen Toshbolta emassan."
fi

echo "" # Bo'sh qatorni bildiradi
```

Natija:

```
Ismingni kirit: User1
Endi kodni kirit: 2353
Yo'q, sen Toshbolta emassan.
```

#### Raqamlarni massivda saqlash:

```bash
#!/bin/bash

read -p "Raqam kirit: " -a array

echo "unda bunda boyni qizi mana shunda:"
echo ${array[2]}
```

Natija:

```
Raqam kirit: 100 200 300 400
unda bunda boyni qizi mana shunda:
300
```

## Ikki yoki bitta qo'shtirnoq?

Ikkita va bitta qo'shtirnoq o'rtasida muhim farq bor. Ikkita qo'shtirnoq ichidagi o'zgaruvchilarning ahamiyati bor. Bitta qo'shtirnoq ichida esa aksincha. Masalan:

```bash
echo "Sizning uyingiz: $HOME" # Sizning uyingiz: /home/<foydalanuvchi nomi>
echo 'Uyingiz: $HOME' # Sizning uyingiz: $HOME
```

```bash
INPUT="G'alati    bo'shliqqa     ega qator.    "
echo $INPUT # Gʻalati boʻshliqqa ega qator.
echo "$INPUT" # G'alati    bo'shliqqa     ega qator.    .
```

```bash
$ echo Galati   boshliqqa     ega  qator
Galati boshliqqa ega qator
$ echo '  Galati   boshliqqa   ega      qator'
  Galati   boshliqqa   ega      qator
```

Endi jiddiyroq misolni ko'rib chiqing:

```bash
FILE="Sevimli narsalar.txt"
cat $FILE # 2 ta faylni chop etishga urinmoqda: Sevimli va narsalar.txt
cat "$FILE" # 1 faylni chop etadi: `Sevimli narsalar.txt`
```

## Avvalgi buyruqga ishora berish

Aytaylik, siz quyidagi vaziyatda `sudo` buyrug'ini berishni unutdingiz:

```bash
$ apt install nodejs
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root son?
```

Butun kommandani qaytadan yozib chiqish o'rniga siz `!!` argumentidan foydalanishingiz mumkin:

```bash
$ sudo !! # bundan oldingi buyruqni '!!' o'rniga qo'yish kerakligini bildiradi
$ sudo apt install nodejs
```

---

## Topshiriq

1. Berilgan `$PATH` o'zgaruvchisi qiymatidagi barcha joylashuvlarni qanday qilib alohida qatorlarda chop etish mumkin? Skript yozing.

2. `read` buyruq funksiyasidan foydalanib, foydalanuvchidan ikkita ma'lumotni oling va bu ma'lumotlar bilan mos ravishda xabar chiqarish uchun skript yozing. Misol uchun, agar foydalanuvchi "Khumoyun" va "18" deb kiritsa, "Salom, Khumoyun. Sen 18 yoshdasan!" xabari chiqarilsin.

3. Foydalanuvchidan ma’lumot olish uchun `read` buyrug‘ining `-t` (timeout) parametridan foydalaning. 10 soniya ichida foydalanuvchidan ma’lumot qabul qiladigan skript yozing. Agar belgilangan vaqt ichida ma’lumot kiritilmasa, "Vaqt tugadi" degan xabar chiqarilsin.

**Keyingi dars:** [[09-dars]]
