---
title: 12 - Arxivlar Bilan Ishlash
description: Terminalda arxivlar bilan ishlash eng kerakli mahoratlardan biri. Chunki bu orqali siz serverdagi ko'plab fayllarni boshqa serverga ko'chirish, "backup" qilish yoki GitHub'dan zip ko'rinishida tortib olingan loyihalarni ochishni stack-overflow'siz amalga oshirasiz.
sort: 12
author: Khumoyun (@comoyun)
tags:
  - tar
  - arxivlash
  - zip
  - gzip
---
![archive](./images/archive.png)

Terminalda arxivlar bilan ishlash eng muhim ko‘nikmalardan biri hisoblanadi. Chunki bu orqali siz serverdagi ko‘plab fayllarni boshqa serverga ko‘chirish, zaxira nusxa olish yoki GitHub-dan zip formatida yuklangan loyihalarni stack-overflow-ga murojaat qilmasdan ochishni amalga oshira olasiz.

## `tar`

`tar` buyrug'i bir nechta fayllarni arxivlash uchun qo'llaniladi. `tar`-ning `zip` dan farqi shundaki, `zip` fayllar "compressed" ya'ni siqilgan bo'ladi (original hajmga nisbatan ancha kichikroq). `tar`-da esa hajm o'zgarishsiz qoladi.

### `tar` fayl yaratish

Joriy fayl tuzilishi quyidagicha:

```
`-- test
    |-- file
    |-- file2
    `-- file3
```

Biz `test` nomli katalogni `tar` faylga aylantiramiz. Buning uchun terminalda:

```bash
$ tar -cf test_backup.tar test
```

Bu yerda:
- `-c` - *create* ya'ni *yarat* ma'nosini bildiradi.
- `-f` - fayl nomi.
- `test_backup.tar` - natija fayl nomi (`.tar` kengaytmasi ixtiyoriy).

Shunday qilib natija:

```
|-- test
|   |-- file
|   |-- file2
|   `-- file3
`-- test_backup.tar
```

### `tar` fayl kontentini ko'rish

`tar` faylini chiqarish o'rniga, shunchaki u yerda nima borligini ko'rishni xohlaymiz. Buning uchun terminalda:

```bash
$ tar -tf test_backup.tar
test/
test/file2
test/file3
test/file
```

Bu yerda:
- `-t` - arxiv tarkibini ko'rsatadi.
- `-f` - fayl nomi.

>`-v` (verbose) optsiyasini qo'shish orqali ko'proq malumot chiqarish mumkin, masalan ruxsatlar, egalik qiluvchi foydalanuvchi va o'zgartirish sanalari.

### `tar` faylni chiqarish

Joriy fayl tuzilishi:

```
|-- test
|   |-- file
|   |-- file2
|   `-- file3
`-- test_backup.tar
```

avval `test` katalogini o'chirib so'ng `test_backup.tar` arxivini chiqaramiz.

```bash
$ rm test -rf
```

`test` katalogi butunlay o'chirildi. Endi arxivni chiqaramiz.

```bash
$ tar -xf test_backup.tar
```

Bu yerda:
- `-x` - *extract* ya'ni *chiqarish* ma'nosini bildiradi.
- `-f` - fayl nomi

> [!tip] Talaffuz
> `tar -xvf test_backup.tar` yodlab qolish juda ham osson. Bu huddi nemis talaffuziga o'xshaydi - *eXtrakt Vi Fayl.*

## `gzip`

`gzip` buyrug'i serverda joyni tejash uchun bir nechta fayllarni siqish uchun ishlatiladi. Natija original hajmga nisbatan ancha kichikroq bo'ladi. Misol uchun 1GB fayl `gzip` orqali 20MB gacha siqilishi mumkin.

### `gzip` yaratish

`gzip` yaratish juda ham osson.

```bash
$ gzip katta_hajmdagi_fayl # natija - katta_hajmdagi_fayl.gz
```

birorta papkani siqish uchun avval `tar` orqali arxivlash zarur.

```bash
$ tar -cf papka.tar papka
```

so'ng, `gzip` dan foydalansak bo'ladi.

```bash
$ gzip papka.tar # natija - papka.tar.gz
```

## `gunzip`

`gunzip` buyrug'i `.gz` kengaytmali fayllarni o'z holiga qaytarish uchun qo'llaniladi. Misol uchun:

```bash
$ gunzip papka.tar.gz # natija - papka.tar
```

## `tar` va `gzip` buyrug'larini birlashtirish

`gzip` bilan birgalikda `tar` buyrug'i yordamida katta hajmdagi papkalarni siqishingiz mumkin.

```bash
$ tar -cvzf papka.tar.gz papka/
```

Bu yerda:
- `-c` - yangi arxiv yaratish.
- `-z` - `gzip` siqishdan foydalanish.
- `-v` - ekranga ko'proq ma'lumot chiqarish (egalik qiluvchilar, o'zgartirilgan sana va h.k).
- `-f` - fayl nomi.

## `zip`

Bu nostandart buyruq hisoblanadi, shu sababli uni ilova menejeri orqali o'rnatib oling: `apt install zip -y`

Ushbu buyruqning vazifasini nomidan hulosa qilish mumkin - papka yoki fayllarni `zip` holatiga keltiradi. ZIP arxivini yaratish uchun quyidagi sintaksisdan foydalaning:

```bash
$ zip arxiv_nomi.zip file1 file2 file3
```

agar papkani arxivlash zarur bo'lsa (`-r`: rekusiv):

```bash
$ zip arxiv_nomi.zip papka/ -r
```

### Mavjud arxivga fayllar qo‘shish

Mavjud ZIP arxiviga `-u` (*update* ya'ni *yangilash*) optsiyasi yordamida yangi fayllar qo'shishingiz mumkin:

```bash
$ zip -u arxiv_nomi.zip fayl1 fayl2
```

### ZIP arxivining roʻyxati

ZIP arxivini chiqarmay faqat tarkibini olish uchun `-l` (*list*) optsiyasidan foydalanishingiz mumkin:

```bash
$ zip -l arxiv_nomi.zip
```

### ZIP arxividan fayllarni chiqarish

ZIP arxividan fayllarni chiqarish uchun `unzip` buyrug'idan foydalaning:

```bash
unzip arxiv_nomi.zip
```

Bu standart ravishda joriy katalogga chiqaradi. Boshqa bir muayyan papkaga chiqarish uchun `-d` optsiyasidan foydalanasiz.

```bash
$ unzip arxiv_nomi.zip -d /boshqa/papka/
```

Qo'shimcha ma'lumot yoki misollar olish uchun terminalda `man zip` yoki `curl https://cheat.sh/zip` buyrug'ini ishga tushiring.

Darvoqe, [cheat.sh](https://cheat.sh/) juda ham foydali saytlardan biri. U yerda deyarli barcha buyruqlar uchun amaliy misollar keltirilgan. Saytga quyidagicha so'rovlar yuborish mumkin:

```bash
$ curl cheat.sh/ls
$ curl cheat.sh/btrfs
$ curl cheat.sh/tar~list
$ curl cheat.sh/gunzip
...
```

---

## Topshiriq

1. `tar` yordamida `data` nomli katalogni arxivga aylantiring va `data_backup.tar` nomli fayl yarating.
2. `gzip` yordamida `data_backup.tar` faylini siqing va `data_backup.tar.gz` nomli fayl yarating.
3. `unzip` yordamida ZIP arxividan fayllarni chiqarib oling va `zip` yordamida yangi fayl qo'shish va arxiv tarkibini ko'rsatish amallarini bajarib ko'ring.

**Keyingi dars:** [[13-dars]]