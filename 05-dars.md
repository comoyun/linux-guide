---
tags:
  - cloud-shell
title: 05 - Foydali Buyruqlar
description: Linux-da terminalga oid ayrim faktlar va foydali buyruqlar bilan tanishamiz.
sort: 5
---
## Google Cloud Shell

Siz [cloud.google.com](https://cloud.google.com) platformasida Linux'ni kompyuteringizga o'rnatmasdan bemalol ishlatishingiz mumkin:

```bash
khumoyun@cloud:~$ neofetch
```

![Google Cloud Server](./images/google-cloud-server.png)

## Ochiq dasturlar

Faoliyat yuritayotgan dasturlarni ko'rish uchun ishlatadigan buyruqlar ro'yxati:

```
$ ps
```

```
$ ps aux
```

```
$ top
```

`htop`  keng qo'llanilgan buyruqlardan biri, lekin bu standart dastur hisoblanmaydi. Shu sababli, uni avval dastur-menejeri orqali o'rnatish zarur:

```bash
$ sudo apt install htop -y
```

## Dastur joylashuvini topish

Sintaks:

```bash
$ whereis buyruq
```

Misol:

```bash
$ whereis aircrack-ng
aircrack-ng: /usr/bin/aircrack-ng /usr/include/aircrack-ng /usr/share/man/man1/aircrack-ng.1.gz
```

> **Pro maslahat:**
> Buyruq haqida qo'shimcha malumot olish uchun ko'pincha `--help` yoki qisqacha `-h` optsiyasini ishlatishingiz mumkin. Misol uchun: `python --help`

## Biroz off-topic

**If it is free, then you're the product** - ya'ni, agar biror narsa bepul bo'lsa, unda siz maxsulotsiz. Shu sababli, ayrim bepul dasturlarni ayniqsa VPN o'rnatayotganda ehtiyot choralarini ko'rishni maslahat beraman.

![free-product-meme](images/free-product-meme.jpg)

**Keyingi dars:** [[06-dars]]