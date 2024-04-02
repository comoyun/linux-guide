---
sort: 19
title: find Buyrug'i
tags:
  - find
description: find buyrug'i haqida batafsil; xayotiy misollar va foydali buyruqlar.
---
Papka, fayllarni qidirish va topilmalar ustida turli operatsiyalar bajarish `find` buyrug'i yordamida juda osson. Uning kuchi fayllarni nom, o'lcham, o'zgartirilgan vaqti yoki kontent bo'yicha qidirish imkonini beradi. Bu yerda asosiy bilimlarni yozishga xarakat qildim. Terminal oynasini ochib maqolada keltirilgan misollarni yozishni va o'z ustingizda ishlashni maslahat beraman.

## Starter

Tizim yoki shaxsiy fayllaringiz ustida qidiruv amallarini ishlashni hozircha tavsiya qilmayman; yetarli tajribaga erishsangiz bas. Shu bois men quyidagi buyruqlarni yozib chiqdim. Bu sizga `find` bilan turli eksperimentlar qilishingizga yordam beradi. Marxamat, nusxalab terminalga uloqtiring.

```bash
# uy katalogiga sakraymiz
cd ~

# eksperiment nomli papka yaratamiz 
mkdir eksperiment

cd eksperiment

# Matn Fayllarini Yaratish
echo "Bu matn fayli." > namuna.txt
echo "Boshqa matn fayli." > boshqa.txt

# Rasm Fayllarini Yaratish
touch rasm1.jpg
touch rasm2.png

# Bo'sh Fayllarni Yaratish
touch bosh1.txt
touch bosh2.txt

# Kataloglar Yaratish
mkdir katalog1
mkdir katalog2
mkdir -p katalog3/pastkatalog1/pastkatalog2

# "Executable" Fayllarni Yaratish
echo '#!/bin/bash' > skript.sh 
echo 'echo "Bu skript."' >> skript.sh 
chmod +x skript.sh

# O'zgartirilgan vaqtlar bilan Fayllarni Yaratish
touch -d "2023-01-01" ozgartirilgan_2023.txt
touch -d "2022-01-01" ozgartirilgan_2022.txt

# katta va kichik fayllar yaratish
dd if=/dev/zero of=katta_fayl bs=1M count=100
dd if=/dev/zero of=kichik_fayl bs=1M count=1

# Kataloglarda Fayllar Yaratish
echo "Katalog1 da fayl." > katalog1/katalog1da_fayl.txt
echo "Katalog2 da fayl." > katalog2/katalog2da_fayl.txt

```

## Kataloglarni saralash

To'g'ri buni `ls -d` yordamida ham bajarish mumkin, lekin `find` bizga yanada ko'proq imkoniyatlarni berishi va topilmalar ustida amallar bajarishi bilan ustuvorlik qiladi. Masalan, `find` yordamida kataloglarni chop etish:

```bash
$ find -type d
.
./katalog2
./katalog1
./katalog3
./katalog3/pastkatalog1
./katalog3/pastkatalog1/pastkatalog2
```

> Yuqoridagi `.` shunchaki joriy papkani bildiradi. `ls -a` buyrug'i yashirin papkalar bilan birgalikda `.` (joriy papka), `..` (yuqori/ota papka) ni ham chiqaradi, lekin buni  `-A` opsiyasi yordamida yo'qotish mumkin: `ls -A`

Juda soz, endi huddi shu amalni `ls` buyrug'i bilan bajaramiz:

- **1** - qatorma qator yozadi
- **d** - faqat kataloglarni chiqaradi
- **a** - yashirin kataloglarni ham hisobga oladi

```
$ ls -1da */
katalog1/
katalog2/
katalog3/
```

Ko'rib turganingizdek, `ls` standart ravishda faqat yuzidagi kataloglarni hisobga olyapti. Lekin `find` bizga moslashuvchanlikni va bu kabi operatsiyalarga standart yechimlarni taqdim qiladi. 

```bash
$ find -maxdepth 1 -type d
.
./katalog2
./katalog1
./katalog3
```

Natijada ko'rinib turgan `.` ya'ni **joriy katalogni** hisobga olmaslik uchun `-mindepth 1` qo'shimchasini yozing, bu  qidiruvni 1 chuqurlikdan boshlaydi ya'ni boshlang'ich katalog - 0 yoki `.` - bundan mustasno.

Shu o'rinda `find`-ni yanada ko'proq qadrlash uchun bir misol keltiraman; buni terminalga yozish shart emas. Aytaylik, siz barcha kataloglar ichida `index.html` fayl yaratmoqchisiz, va bizda quyidagi ko'rinishda papkalar mavjud:

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

`find` buyrug'i aynan shunday vaziyatlar uchun mo'ljallangan:

- `-exec` - qidiruv natijalari ustida istalgan buyruqni bajaradi
- `{}` - shunchaki qidiruv natijasini `{}` o'rniga qo'yadi
- `touch` - yangi fayl yaratadi yoki faylning o'zgartirilgan sanasini yangilaydi
- `';'` -  bu buyruq yakunlanganini bildiradi, xuddi html teglariga o'xshab. (majburiy).

```bash
$ find -mindepth 1 -maxdepth 1 -type d -exec touch {}/index.html ';' 
```

To'g'ri, yuqoridagi buyruq uzun va tushunarsizdek tuyulishi mumkin va hamma narsani o'rganish, jumladan **touch-typing**, avvaliga qiyinchilik tug'diradi, biroq ozgina tajriba va vaqt bilan o'zingizni qulay his qilasiz.

## Fayllarni saralash

Avval kataloglarni saralayotganda `-type d` opsiyasini qo'llagan edik. Fayllarga esa `f` qiymati beriladi.

```bash
$ find -type f
./katalog2/katalog2da_fayl.txt
./skript.sh
./katalog1/katalog1da_fayl.txt
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

>`type` opsiyasi yozilmasa kataloglarni ham chiqaradi.

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
./katalog2/katalog2da_fayl.txt
./skript.sh
./katalog1/katalog1da_fayl.txt
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

Topilmalarni **o'chirib yuborishni** 2 yo'li bor:

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
./katalog2/katalog2da_fayl.txt
./katalog1/katalog1da_fayl.txt
./boshqa.txt
./namuna.txt
./rasm2.png
...
```

> [Terminal](https://linux.xumoyun.uz/terminal) sahifasiga tashrif buyurib buyruqlarni yozib mashq qiling. 

## Topshiriqlar

1. *Barcha matnli fayllarni (.txt) topish va ularni ".txt_backup"  nomiga o'zgartirish*.
2. *Bajariladigan fayllarni (.sh, .exe va h.k) toping va ularni o'chiring.*
3. *Barcha bo'sh kataloglarni toping va ularni o'chiring.*
4. *Tarkibida "Boshqa" so'zi bor fayllarni qidiring va ularni "boshqalar" nomli katalogga o'tkazing.*

