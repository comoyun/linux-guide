---
title: 12 - Arxivlar Bilan Ishlash
description: Ushbu maqolada siz tar, gzip, va zip buyruqlari yordamida arxivlarni yaratish, siqish, chiqarish va tarkibini ko'rish usullarini o'rganasiz.
sort: 12
author: Khumoyun (@comoyun)
tags:
  - tar
  - arxivlash
  - zip
  - gzip
---
Terminalda arxivlar bilan ishlash eng muhim ko‘nikmalardan biridir. Bu orqali siz serverdagi ko‘plab fayllarni boshqa serverga ko‘chirish, zaxira nusxa olish yoki GitHub-dan zip formatida yuklangan loyihalarni stack-overflow-ga murojaat qilmasdan ochishingiz mumkin.

## `tar`

`tar` buyrug'i bir nechta fayllarni arxivlash uchun ishlatiladi. `tar`-ning `zip`dan farqi shundaki, `zip` fayllar siqilgan bo'ladi (original hajmga nisbatan kichikroq), `tar` esa hajmni o'zgartirmaydi.

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

- `-c` - _create_ ya'ni _yaratish_ ma'nosini bildiradi.
- `-f` - fayl nomini belgilaydi.
- `test_backup.tar` - natija fayl nomi (`.tar` kengaytmasi ixtiyoriy).

Shunday qilib, natija quyidagi ko'rinishga ega bo'ladi:

```
|-- test
|   |-- file
|   |-- file2
|   `-- file3
`-- test_backup.tar
```

### `tar` fayl kontentini ko'rish

Faylni chiqarish o'rniga, uning tarkibini ko'rishni xohlasangiz, quyidagi buyruqni ishlatishingiz mumkin:

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

> `-v` (verbose) optsiyasini qo'shish orqali ko'proq ma'lumot, masalan, ruxsatlar, egalik qiluvchi foydalanuvchi va o'zgartirish sanalari haqida ma'lumot olish mumkin.

### `tar` faylni chiqarish

Joriy fayl tuzilishi:

```
|-- test
|   |-- file
|   |-- file2
|   `-- file3
`-- test_backup.tar
```

Avval `test` katalogini o'chirib, so'ngra `test_backup.tar` arxivini chiqaramiz:

```bash
$ rm -rf test
```

`test` katalogi o'chirildi. Endi arxivni chiqaramiz:

```bash
$ tar -xf test_backup.tar
```

Bu yerda:

- `-x` - _extract_ ya'ni _chiqarish_ ma'nosini bildiradi.
- `-f` - fayl nomi.

> [!tip] Talaffuz `tar -xvf test_backup.tar` yodlash juda oson. Bu nemischa talaffuzga o'xshaydi - _eXtract Vi Fayl._

## `gzip`

`gzip` buyrug'i serverda joyni tejash uchun fayllarni siqish uchun ishlatiladi. Fayl hajmi siqish jarayonida kamayadi. Misol uchun, 1GB fayl `gzip` orqali 20MB gacha siqilishi mumkin.

### `gzip` yaratish

**Fayl tuzilishi:**

```
papka
 |-- file1
 |-- file2
 `-- file3
```

Papkalarni siqish uchun avval `tar` orqali arxivlash zarur:

```
$ tar -cf papka.tar papka
```

**Fayl tuzilishi:**

```
|-- papka.tar
`-- papka
    |-- file1
    |-- file2
    `-- file3
```

Keyin `gzip`ni ishlatamiz:

```
$ gzip papka.tar # natija - papka.tar.gz
```

**Fayl tuzilishi:**

```
|-- papka.tar.gz
|-- papka.tar
`-- papka
    |-- file1
    |-- file2
    `-- file3
```

Yoki, bularni bitta buyruqda birlashtirib:

```
$ tar -czf papka.tar.gz papka
```

**Fayl tuzilishi:**

```
|-- papka.tar.gz
|-- papka.tar
`-- papka
    |-- file1
    |-- file2
    `-- file3
```

## `gunzip`

`gunzip` buyrug'i `.gz` kengaytmali fayllarni o'z holiga qaytarish uchun ishlatiladi. Misol uchun:

```bash
$ gunzip papka.tar.gz # natija - papka.tar
```

## `tar` va `gzip` buyrug'larini birlashtirish

`gzip` bilan birgalikda `tar` buyrug'i yordamida katta hajmdagi papkalarni siqishingiz mumkin:

```bash
$ tar -cvzf papka.tar.gz papka/
```

Bu yerda:

- `-c` - yangi arxiv yaratish.
- `-z` - `gzip` siqishdan foydalanish.
- `-v` - ekranga ko'proq ma'lumot chiqarish (egalik qiluvchilar, o'zgartirilgan sana va h.k).
- `-f` - fayl nomi.

**Arxivni chiqarish:**

Arxivni chiqarish uchun `tar` buyrug'ini `-x` (extract) opsiyasi bilan ishlatishingiz mumkin:

```bash
$ tar -xvzf papka.tar.gz
```

Bu yerda:

- `-x` - arxivni chiqarish.
- `-v` - ekranga yordamchi malumot chiqarish.
- `-z` - `gzip` siqishdan foydalanish.
- `-f` - fayl nomi.

## `zip`

Bu nostandart buyruq hisoblanadi, shu sababli uni ilova menejeri orqali o'rnatib oling: `apt install zip -y`

Ushbu buyruqning vazifasini nomidan hulosa qilish mumkin - papka yoki fayllarni `zip` holatiga keltiradi. ZIP arxivini yaratish uchun quyidagi sintaksisdan foydalaning:

```bash
$ zip arxiv_nomi.zip file1 file2 file3
```

Agar papkani arxivlash zarur bo'lsa (`-r`: rekusiv):

```bash
$ zip arxiv_nomi.zip papka/ -r
```

### Mavjud arxivga fayllar qo‘shish

Mavjud ZIP arxiviga `-u` (_update_ ya'ni _yangilash_) optsiyasi yordamida yangi fayllar qo'shishingiz mumkin:

```bash
$ zip -u arxiv_nomi.zip fayl1 fayl2
```

### ZIP arxivining ro'yxati

ZIP arxivini chiqarmay faqat tarkibini olish uchun `-l` (_list_) optsiyasidan foydalaning:

```bash
$ zip -l arxiv_nomi.zip
```

### ZIP arxividan fayllarni chiqarish

ZIP arxividan fayllarni chiqarish uchun `unzip` buyrug'idan foydalaning:

```bash
unzip arxiv_nomi.zip
```

Bu standart ravishda joriy katalogga chiqaradi. Boshqa bir muayyan papkaga chiqarish uchun `-d` optsiyasidan foydalaning:

```bash
$ unzip arxiv_nomi.zip -d /boshqa/papka/
```

Qo'shimcha ma'lumot yoki misollar olish uchun terminalda `man zip` yoki `curl https://cheat.sh/zip` buyrug'ini ishga tushiring.

Darvoqe, [cheat.sh](https://cheat.sh/) juda foydali saytlardan biri. U yerda deyarli barcha buyruqlar uchun amaliy misollar keltirilgan. Saytga quyidagicha so'rovlar yuborish mumkin:

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
