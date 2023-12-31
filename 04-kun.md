## Shebang

Shebang dasturni qanday turkumdaligini aniqlash uchun kodning boshiga qo'yiladi. U Python, Bash yoki Awk scriptlash tillari bo'lishi mumkin. Sintaksis esa quyidagicha:

```bash
#!/bin/bash
```

## Serverga "ping" so'rov yuborish

![ping-request](images/ping-request.png)

`ping` host tirik yoki yo'qligini bilish uchun ishlatiladigan asosiy buyruqlardan biridir. Bu buyruq deyarli barcha Linux operatsion sistemalarida, jumladan Windows'da ham mavjud. 

```bash
$ ping -c 5 google.com 
```

bu yerda `-c` (count) ya'ni necha marta so'rov yuborish kerakligini belgilaydi aks holda `ping` serverga to'xtovsiz so'rov yuborib turadi .

## Ma'lumotlarni grep orqali filterlash

```bash
$ ping -c 5 192.168.43.2 > ip.txt
$ cat ip.txt | grep "64 bytes"
```

Bu yerda:
- `ping` orqali "192.168.43.2" lokal IP manzilga 1 marta so'rov yuborib, natijani `ip.txt` fayl ichiga yo'naltirdik.
- `cat` (concatinate) ya'ni bir nechta fayllarni ulash uchun xizmat qiladi, lekin ko'p odamlar shunchaki fayl ichidagi kontentga bir nazar solish uchun ishlatishadi.
- `grep qidiruv_termin` ping so'rovidan kelgan javoblarni "qidiruv_termin" bo'yicha filterlaydi va faqat topilgan satrni ekranga chiqaradi.

Agar server 64 bayt malumot qaytarsa, uni ishlayotganini bilish mumkin.  Oddiydek tuyuladi, lekin bu jarayonni avtomatlashtirish orqali turli-xil amallarni bajarish mumkin, misol uchun, router'ga ulangan qurilmalarni filterlash va topilgan IP manzillar ustida zaifliklarni skanerlash. 

## Linux - cut

Berilgan matnni " " (bo'shliqga) bo'lib, 4-nchi maydonni ekranga chiqaradi.

```bash
$ cut -d " " -f 4
```

## Skriptni ishga tushirish

Dasturni ishga tushirishdan avval "executable" huquqi borligiga ishonch hosil qiling. 

```bash
$ chmod +x script.sh 
$ ./script.sh
```

## Nmap dasturi orqali IP manzilda veb-server ishlayotganini aniqlash

Quyidagi buyruq 80 (http) va 443 (https) portlarda veb-serverni mavjudligini aniqlaydi.

```bash
$ nmap -p 80,443 70.70.70.70
```

Agar qandaydir xatolikga duch kelsangiz, nmap'ni qayta o'rnating:

```bash
$ sudo apt install nmap -y 
```

P.S. `-y` (yes) optsiyasi har qanday so'rovlarga "ha" javobini beradi.

[< 03-kun](./03-kun.md) | [05-kun >](./05-kun.md)
