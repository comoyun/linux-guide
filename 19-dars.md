---
title: 19 - "find" Buyrug'i
description: "\"find\" buyrug'i haqida batafsil; xayotiy misollar va foydali buyruqlar."
sort: 19
author: Khumoyun (@comoyun)
tags:
  - find
---
![find-grandma-meme](./images/find-grandma-meme.png)

`find` buyrug‘i yordamida papkalar va fayllarni qidirish hamda topilgan natijalar ustida turli amallarni bajarish juda oson. U fayllarni nomi, hajmi, o‘zgartirilgan sanasi yoki tarkibi bo‘yicha izlash imkonini beradi. Bu yerda asosiy ma'lumotlarni taqdim etishga harakat qildim.

## Dastlabki qadam

Tizim yoki shaxsiy fayllaringiz ustida qidiruv amallarini bajarishni hozircha tavsiya qilmayman; yetarli tajribaga erishsangiz bas. Shu bois men quyidagi buyruqlarni yozib chiqdim. Bu sizga `find` buyrug'ini xavfsiz ishlatish uchun simulyatsiya muhitini yaratadi. Marxamat, nusxalab terminalga uloqtiring.

```bash
# uy papkaga sakraymiz
cd ~

# eksperiment nomli papka yaratish 
mkdir eksperiment

cd eksperiment

# matn fayllarini yaratish
echo "Bu matn fayli." > namuna.txt
echo "Boshqa matn fayli." > boshqa.txt

# rasm fayllarini yaratish
touch rasm1.jpg
touch rasm2.png

# bo'sh fayllarni yaratish
touch bosh1.txt
touch bosh2.txt

# papkalar yaratish
mkdir papka1
mkdir papka2
mkdir -p papka3/pastpapka1/pastpapka2

# "executable" fayllarni yaratish
echo '#!/bin/bash' > skript.sh 
echo 'echo "Bu skript."' >> skript.sh 
chmod +x skript.sh

# o'zgartirilgan vaqtlar bilan Fayllarni Yaratish
touch -d "2023-01-01" ozgartirilgan_2023.txt
touch -d "2022-01-01" ozgartirilgan_2022.txt

# katta va kichik fayllar yaratish
dd if=/dev/zero of=katta_fayl bs=1M count=100
dd if=/dev/zero of=kichik_fayl bs=1M count=1

# papkalarda Fayllar Yaratish
echo "papka1 da fayl." > papka1/papka1da_fayl.txt
echo "papka2 da fayl." > papka2/papka2da_fayl.txt

```

## Papkalarni saralash

To'g'ri buni `ls -d` yordamida ham bajarish mumkin, lekin `find` bizga yanada ko'proq imkoniyatlarni berishi va topilmalar ustida amallar bajarishi bilan ustuvorlik qiladi. Masalan, `find` yordamida papkalarni chop etish:

```bash
$ find -type d
.
./papka2
./papka1
./papka3
./papka3/pastpapka1
./papka3/pastpapka1/pastpapka2
```

> Yuqoridagi `.` belgisi joriy papkani anglatadi. `ls -a` buyrug'i barcha fayllarni, shu jumladan yashirin fayllarni, `.` (joriy papka) va `..` (yuqori/ota papka) bilan birga ko'rsatadi. Agar siz joriy va yuqori papkalarni ko'rinishdan olib tashlamoqchi bo'lsangiz, `-A` opsiyasidan foydalanishingiz mumkin: `ls -A`.

Juda soz, endi huddi shu amalni `ls` buyrug'i bilan bajaramiz:

- **1** - qatorma qator yozadi
- **d** - faqat papkalarni chiqaradi
- **a** - yashirin papkalarni ham hisobga oladi

```bash
$ ls -1da */
papka1/
papka2/
papka3/
```

Ko'rib turganingizdek, `ls` standart ravishda faqat yuzidagi papkalarni hisobga olyapti. Lekin `find` bizga moslashuvchanlikni va bu kabi operatsiyalarga standart yechimlarni taqdim qiladi. 

```bash
$ find -maxdepth 1 -type d
.
./papka2
./papka1
./papka3
```

Natijada ko'rinib turgan `.` ya'ni **joriy papkani** hisobga olmaslik uchun `-mindepth 1` qo'shimchasini yozing, bu  qidiruvni 1 chuqurlikdan boshlaydi ya'ni boshlang'ich papka - 0 yoki `.` - bundan mustasno.

Shu o'rinda `find`-ni yanada ko'proq qadrlash uchun bir misol keltiraman; buni terminalga yozish shart emas. Aytaylik, siz barcha papkalar ichida `index.html` fayl yaratmoqchisiz, va bizda quyidagi ko'rinishda papkalar mavjud:

```
about/
contact/
services/
home/
privacy-policy/
terms-of-service/
blog/
...
```

`find` buyrug'i aynan shunday vaziyatlarda qo'l keladi:

- `-exec` - qidiruv natijalari ustida istalgan buyruqni bajaradi
- `{}` - shunchaki qidiruv natijasini `{}` o'rniga qo'yadi
- `touch` - yangi fayl yaratadi yoki faylning o'zgartirilgan sanasini yangilaydi
- `';'` -  bu buyruq yakunlanganini bildiradi, xuddi html teglariga o'xshab. (majburiy).

```bash
$ find -mindepth 1 -maxdepth 1 -type d -exec touch {}/index.html ';' 
```

To'g'ri, yuqoridagi buyruq uzun va tushunarsizdek tuyulishi mumkin va hamma narsani o'rganish, jumladan **touch-typing**, avvaliga qiyinchilik tug'diradi, biroq ozgina tajriba va vaqt bilan o'zingizni qulay his qilasiz.

## Fayllarni saralash

Avval papkalarni saralayotganda `-type d` opsiyasini qo'llagan edik. Fayllarga esa `f` qiymati beriladi.

```bash
$ find -type f
./papka2/papka2da_fayl.txt
./skript.sh
./papka1/papka1da_fayl.txt
./katta_fayl
./bosh1.txt
./ozgartirilgan_2022.txt
./bosh2.txt
./boshqa.txt
./ozgartirilgan_2023.txt
./rasm2.png
./namuna.txt
./rasm1.jpg
./kichik_fayl
```

Faqat `bosh` bilan boshlanadigan fayllarni chiqarish quyidagicha amalga oshiriladi:

```bash
$ find bosh* -type f 
bosh1.txt
bosh2.txt
boshqa.txt
```

**Executable** fayllarni chiqarish uchun `-executable` opsiyasini yozing:

```bash
$ find -type f -executable
./skript.sh
```

>`type` opsiyasi yozilmasa papkalarni ham chiqaradi.

**Bo'sh** fayllarni qidirish uchun `-empty` opsiyasini yozing:

```bash
$ find -type f -empty 
./bosh1.txt
./ozgartirilgan_2022.txt
./bosh2.txt
./ozgartirilgan_2023.txt
./rasm2.png
./rasm1.jpg
```

**Teskarisi** ya'ni bo'sh bo'lmagan fayllarni chiqarish uchun `-not` opsiyasidan foydalanamiz:

```bash
$ find -type f -not -empty
./papka2/papka2da_fayl.txt
./skript.sh
./papka1/papka1da_fayl.txt
./katta_fayl
./boshqa.txt
./namuna.txt
./kichik_fayl
```

**N** o'lchamdan katta yoki kichik bo'lgan fayllarni chiqarish uchun `-size` opsiyasidan foydalanamiz:

```bash
$ find -type f -size +1m # +/-
./katta_fayl

$ find -type f -size +100k # k/m/g/t
./katta_fayl
./kichik_fayl
```

Topilmalarni **o'chirib yuborishni** 2 ta yo'li bor:

1. `-delete`
2. `-exec rm {} -rf ';'`

Misol, bo'sh fayllarni o'chirib yuborish uchun `-delete` opsiyasidan quyidagidek foydalanamiz:

```bash
$ find -type f -empty -delete
$ # yoki
$ find -type f -empty -exec rm {} -rf ';'
```

`777` huquqi bilan belgilangan fayllarni qidirish uchun `-perm 777` opsiyasidan foydalanamiz:

```bash
$ find -type f -perm 777
```

**root** yoki biror bir foydalanuvchisiga tegishli fayllarni topish uchun `-user root` opsiyasidan foydalanamiz:

```bash
$ type -type f -user root
```

u yoki bu, fayl - qandaydir belgilar yoki kengaytma bilan va h.k kabi amallarni ko'pincha **RegExp** (Regular Expression) yordamida bajaramiz. RegExp juda keng tarqalgan va o'rganish ildizi chuqur bo'lgani sababli u haqida internetdan yoki "Learning Regular Expressions" nomli kitob orqali o'rganib olasiz. Quyida `png` yoki `txt` kengaytmali fayllarni qidiryapmiz:

```bash
$ find -type f -regex '.*\.\(png\|txt\)'
./papka2/papka2da_fayl.txt
./papka1/papka1da_fayl.txt
./boshqa.txt
./namuna.txt
./rasm2.png
...
```

## Topshiriqlar

1. Barcha matnli fayllarni (.txt) topish va ularni ".txt_backup"  nomiga o'zgartirish.
2. Bajariladigan fayllarni (.sh, .exe va h.k) toping va ularni o'chiring.
3. Barcha bo'sh papkalarni toping va ularni o'chiring.
4. Tarkibida "Boshqa" so'zi bor fayllarni qidiring va ularni "boshqalar" nomli papkaga o'tkazing.

**Keyingi dars:** [[20-dars]]