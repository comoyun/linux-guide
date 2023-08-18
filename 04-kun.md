## Shebang

Shebang dasturni qanday turkumdaligini aniqlash uchun kodning boshiga qo'yiladi. U Python, Bash yoki Awk scriptlash tillari bo'lishi mumkin. Sintaksis esa quyidagicha:

```bash
#!/bin/bash
```

## Serverga "ping" so'rov yuborish

Ping server tirik yoki yo'qligini bilish uchun ishlatiladigan asosiy buyruqlardan biridir. Bu buyruq deyarli barcha Linux operatsion sistemalarida va Windows'da ham uchrab turadi. 

```bash
$ ping -c 5 google.com 
```

bu yerda `-c` (count) ya'ni necha marta so'rov yuborish kerakligini bildiradi. 

## Ma'lumotlarni grep orqali filterlash

```bash
$ ping -c 1 192.168.43.2 > ip.txt
$ cat ip.txt | grep "64 bytes"
```

## Linux - cut

Berilgan matnni " " (bo'shliqga) bo'lib, 4-nchi maydonni ekranga chiqaradi.

```bash
$ cut -d " " -f 4
```

## Dasturlarni ishga tushirish

Dasturni ishga tushirishdan avval "executable" huquqi borligiga ishonch hosil qiling. 

```bash
$ chmod +x script.sh 
$ ./script.sh
```

## Nmap orqali IP manzilda veb-server mavjudligini aniqlash

Quyidagi buyruq 80 (http) va 443 (https) portlarda veb-server'ni aniqlaydi.

```bash
$ nmap -p 80,443 70.70.70.70
```

Agar qandaydir xatolikga duch kelsangiz, nmap'ni qayta o'rnating:

```bash
$ sudo apt install nmap -y 
```

P.S. `-y` (yes) optsiyasi har qanday so'rovlarga "ha" javobini beradi.

[< 03-kun](03-kun.md) | [05-kun >](05-kun.md)