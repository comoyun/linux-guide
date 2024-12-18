---
title: 09 - Bash
description: Ba'zi foydali buyruqlar va bash skriptlash bilan tanishamiz.
sort: 9
author: Khumoyun (@comoyun)
tags:
  - foydali
---
**Bash** - kompyuter bilan muloqot qilishning o‘ziga xos tili. Siz buyruqlarni faylga yozasiz, u esa ularni qatorma-qator bajaradi.

Nega kerak? Bir vaqtning o‘zida choy damlab, kompyuteringizni ish bilan band qila olasiz. Bash dangasa odamlar uchun juda qulay vosita. **Eslatma**: Maqoladagi har bir detalni tushunish shart emas. Shunchaki ularning mavjudligini bilsangiz yetarli. Xuddi bir necha yil oldin yaratgan loyihangiz kodini tushunmasangiz-da, u nima ish bajarayotganini va kerak bo‘lsa, uni qaytadan yozib chiqish mumkinligini his qilganingiz kabi.

## Global o'zgaruvchilar

Jadvaldagi ayrim o'zgaruvchilarni yodlash maqsadga muvofiq bo'ladi:

| O'zgaruvchi | Tavsif                                                                    |
| :---------- | :------------------------------------------------------------------------ |
| `$HOME`     | Joriy foydalanuvchining uy katalogi. Misol: `/home/khumoyun/`             |
| `$PATH`     | Bajariladigan fayllar ro'yxati.                                           |
| `$PWD`      | Joriy ish manzili                                                         |
| `$RANDOM`   | Tasodifiy raqam (0–32767).                                                |
| `$UID`      | Joriy foydalanuvchining identifikatori.                                   |
| `$PS1`      | [PS1 o'zgaruvchisi](https://www.warp.dev/blog/whats-so-special-about-ps1) |
| `$PS2`      | -                                                                         |

O'zgaruvchini ko'rish (muhit - Google Cloud Shell):

```bash
$ echo $PATH
/home/khumoyun/.local/bin:/opt/gradle/bin:/opt/maven/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/go/bin:/usr/local/rvm/bin:/google/go_appengine:/google/google_appengine:/google/migrate/anthos/:/home/khumoyun/.gems/bin:/usr/local/rvm/bin:/home/khumoyun/gopath/bin:/google/gopath/bin:/google/flutter/bin:/usr/local/nvm/versions/node/v20.10.0/bin
```

## Exit / chiqish kodlari

Har bir buyruq chiqish kodini qaytaradi. Muvaffaqiyatli buyruq '0' ni qaytarsa, muvaffaqiyatsiz buyruq 1 dan 255 gacha bo'lgan qiymatni qaytaradi. 

```bash
$ exit 0 # muvaffaqiyatli
$ exit 1 # xatolik
```

Dastur tugagach, chiqish kodi `$?` o'zgaruvchisiga yoziladi. Avvalgi dasturning chiqish kodini tekshirish uchun: `echo $?`.

## Izohlar

Izohlar kodni tushunishni osonlashtiradi va kompilyatorlar tomonidan e'tiborga olinmaydi:

```bash
$ # lalalalalala<enter>
$
```

Izohlarni uzunroq buyruqlarni tushuntirishda ishlatish mumkin:

```bash
$ ls -lht ~ | head -n 5 # Uy katalogidagi fayllarni o'zgartirish vaqti bo'yicha filterlaydi va yuqoridagi 5 tasini ko'rsatadi
```

## `read`

`read` buyruq `stdin`dan ma'lumotni o'qiydi. Qo'llanilishi:

```bash
read [-ers] [-a massiv] [-d chegaralovchi] [-i matn] [-n nchars] [-N nchars]
     [-p prompt] [-t vaqt] [-u fd] [ozgaruvchi1 ...] [ozgaruvchi2 ...]
```

Agar o'zgaruvchilar ko'rsatilmagan bo'lsa, ma'lumot `$REPLY` o'zgaruvchisiga saqlanadi.

```bash
#!/bin/bash

read # ma'lumot kiritishni kutadi
echo $REPLY # kiritilgan ma'lumotni ekranga chop etadi
```

| Optsiya | To'liq Nomi             | Tavsifi                                                        |
| :-----: | :---------------------- | :------------------------------------------------------------- |
|  `-a`   | array/massiv            | So'zlarni massivda saqlaydi                                    |
|  `-e`   |                         | ["-e" optsiyasi ](https://www.baeldung.com/linux/read-command) |
|  `-d`   | delimiter/chegaralovchi | Chegaralovchi o'rnatadi                                        |
|  `-n`   | nchars                  | **n** ta belgilarni o'qigandan so'ng to'xtatadi                |
|  `-N`   | nchars                  | **n** belgilar yoki EOF o'qilganda to'xtaydi                   |
|  `-p`   | prompt                  | Konsolda promptni chop etadi                                   |
|  `-i`   | interactive             | O'zgartirish mumkin bo'lgan matnni ko'rsatadi                  |
|  `-r`   | raw input               | Maxsus belgilarni talqin qilmaslik                             |
|  `-s`   | silent/sokin            | Maxfiy kiritish                                                |
|  `-t`   | timeout/turib-turish    | Vaqtni kutish                                                  |
|  `-u`   | file descriptor         | ["-u" optsiyasi ](https://www.baeldung.com/linux/read-command) |

```bash
#!/bin/bash

read -p 'Ismingni kirit: ' name

read -sp 'Endi kodni kirit: ' password

if [ "$password" == "1234" ] && [ "$name" == "Toshbolta" ]; then
   echo -e "\nTo'g'ri, sen xaqiqiy Toshboltasan!"
else
   echo -e "\nYo'q, sen Toshbolta emassan."
fi

echo "" # Bo'sh qator
```

Natija:

```
Ismingni kirit: User1
Endi kodni kirit: 2353
Yo'q, sen Toshbolta emassan.
```

Raqamlarni massivda saqlash:

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

Ikkita qo'shtirnoq ichidagi o'zgaruvchilarning ahamiyati bor. Bitta qo'shtirnoqda esa yo'q. Masalan:

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

Jiddiy misol:

```bash
FILE="Sevimli narsalar.txt"
cat $FILE # 2 ta faylni chop etishga urinmoqda: Sevimli va narsalar.txt
cat "$FILE" # 1 faylni chop etadi: `Sevimli narsalar.txt`
```

## Avvalgi buyruqga ishora berish

Agar `sudo` buyrug'ini unutgan bo'lsangiz:

```bash
$ apt install nodejs
E: Could not open lock file /var/lib/dpkg/lock-frontend - open (13: Permission denied)
E: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), are you root son?
```

Butun kommandani qaytadan yozish o'rniga `!!` ishlatish mumkin:

```bash
$ sudo !! # Oldingi buyruqni qo'shadi
$ sudo apt install nodejs
```

---

## Topshiriq

1. `$PATH` o'zgaruvchisi qiymatidagi barcha joylashuvlarni alohida qatorlarda chop etadigan skript yozing.

2. `read` buyruqidan foydalanib, foydalanuvchidan ikkita ma'lumotni oling va mos ravishda xabar chiqaradigan skript yozing. Masalan, foydalanuvchi "Khumoyun" va "18" deb kiritsa, "Salom, Khumoyun. Sen 18 yoshdasan!" deb chiqarilsin.

3. `read` buyrug'ining `-t` (timeout) parametridan foydalanib, foydalanuvchidan 10 soniya ichida ma'lumot qabul qiladigan skript yozing. Agar ma'lumot kiritilmasa, "Vaqt tugadi" degan xabar chiqarilsin.

**Keyingi dars:** [[10-dars]]