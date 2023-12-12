## Google Cloud Shell

Siz https://cloud.google.com platformasida Linuksni kompyuteringizga o'rnatmasdan bemalol ishlatishingiz mumkin:

```bash
khumoyun@cloud:~$ uname -a 
```

## Ochiq dasturlar

Joriy ochiq dasturlarni ko'rish uchun ishlatadigan buyruqlar ro'yxati:

```
$ ps
```

```
$ ps aux
```

```
$ top
```

`htop`  keng qo'llanilgan buyruqlardan biri va bu standart dastur hisoblanmaydi. Shu sababli uni avval package-manager orqali o'rnatish kerak:

```
$ sudo apt install htop -y
```

## Favicon nima?

Favicon saytning brendini aks ettiradigan rasm (odatda ..ico yoki png formatlarda).

## If it is free, then you're the product

Agar biror narsa bepul bo'lsa, unda siz maxsulotsiz. Shu sababli ayrim bepul dasturlarni (VPN) ustanovka qilayotganda ehtiyot choralarini ko'rishingizni maslahat beraman.

## Dasturning "binary" joylashuvini topish

Sintaks: 

```
$ whereis command
```

Misol:

```
$ whereis aircrack-ng
aircrack-ng: /usr/bin/aircrack-ng /usr/include/aircrack-ng /usr/share/man/man1/aircrack-ng.1.gz
```

