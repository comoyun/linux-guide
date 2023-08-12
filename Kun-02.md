### Tarmoq haqidagi ma'lumotlarni ko'rsatish

Siz o'zingizning ichki IP manzilingizni Windows'dagi ipconfig'ga o'xshab ko'rishingiz mumkin:

```
$ ifconfig 
```

Muayyan wlan adapteri haqida malumot olish:

```
$ ifconfig wlan0 
```

### Xost tirik yoki yo'qligini tekshirish

```
$ ping hostaddr
```

Agar u javob bersa, demak u tirik.

### IP manzillarni MAC manzillari bilan bog'lash

```
$ arp -a
```

Qaysi portlar ochiqligini va u bilan qanday dastur bog'langanligini ko'rish uchun "netstat" buyrug'ini kiriting.

```
$ netstat
```

### Buyruqlar tarixini qanday olish mumkin?

