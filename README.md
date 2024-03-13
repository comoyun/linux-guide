## Kirish

![linux-banner](images/linux-banner-2.png)

**Linux** - dunyodagi eng kuchli superkompyuterlarni, Internetni quvvatlaydigan serverlarning ko'pchiligini yurg'izib turadigan dolzarb tizim hisoblanadi. Milliardlab Android qurilmalar, Arduino, aqlli soat va televizorlar, hullas qisqasi, Linux hamma joyda.

Linux'ni o'rganar ekansiz ko'plab distributivlar bilan to'qnashasiz; u shoxdan bu shoxga sakrab vaqtingizni bekor sarflash o'rniga o'zingiz uchun avvaldan qat'iy reja tuzib oling. Linux hamma uchun ham optimal variant emas; bunga sabab drayver va dasturiy ta'minotning muvofiqligi bilan bog'liq bir qancha muammolar. Agar Linux'ni to'liq o'rnatishni va undan kundalik hayotda foydalanishni hoxlasangiz, avvalo apparat mosligini va drayver uchun yetarlicha qo'llab-quvvatlash mavjudligini tekshiring - Linux bilan yaxshi chiqishadigan kompyuter sotib oling. 

Quyida eng ko'p ishlatiladigan Linux distributivlarini keltirib o'tdim. Ulardan birini tanlang va virtual mashinalar bilan tajriba o'tkazing - bu asosiy kompyuterga zarar yetkazmasdan tizim ishlashi, interfeys va sozlamalarni o'rganish imkonini beradi.

| Distributiv | Havola |
| :--- | :--- |
| Fedora | [www.fedoraproject.org](https://www.fedoraproject.org/) |
| Red Hat Enterprise Linux (RHEL) | [www.redhat.com](https://www.redhat.com/) |
| CentOS | [www.centos.org](https://www.centos.org) |
| Debian | [www.debian.org](https://www.debian.org)  |
| Ubuntu | [www.ubuntu.com](https://www.ubuntu.com)  |
| Linux Mint | [www.linuxmint.com](https://www.linuxmint.com)  |
| SUSE | [www.suse.com](https://www.suse.com) |
| OpenSUSE | [www.opensuse.org](https://www.opensuse.org) |

## Qo'llanma haqida

Bu yerda Linux va unga oid turli-xil dasturlar haqida ma'lumot ulashaman. Malumotlarni tartib bo'yicha yozishga harakat qilaman, lekin o'zimning yo'l xaritam mutlaqo tartibsiz. Qachondir yangi narsa o'rgansam, shu yerga qo'shib qo'yaman. Bu qo'llanma nafaqat yangi Linux foydalanuvchilari uchun, balki tajribali Tizim Administratorlari ham oz'lariga kerakli biror malumot topishlari mumkin deb o'ylayman. Umid qilamanki, qo'llanma sizga foydasi tegadi (albatta menga ham)! 

**O'qish variantlari:**

1. Qulay - [linux.xumoyun.uz](https://linux.xumoyun.uz/) 
2. GitHub - [01-dars](https://github.com/comoyun/linux-guide/blob/main/01-dars.md)

## Reja

- [ ] Maqolalar bilan tanishib, Linux haqida asosiy bilimga ega bo'ling
- [ ] Virtual mashinalar yoki WSL bilan tajriba o'tkazing
- [ ] O'zingizga mos Linux distributiv tanlang

# FAQ

## Linux men uchunmi?

Linux'ni barchaga tavsiya qilsamda, geymerlar va texnik bilimga unchalik ega bo'lmagan oddiy odamlar bundan mustasno. Agar siz geymer bo'lsangiz, siz o'ynaydigan o'yinlar katta ehtimol bilan Linux uchun maxsus ishlab chiqilmagan - to'g'ri, emulyatorlar orqali o'ynash mumkin, ammo bu o'yin samaradorligini sezilarli darajada pasaytiradi xattoki kompyuteringiz eng zamonaviy rusumda bo'lsa ham.

## Bu bilan nimaga erishaman?

Bu savolni Linux'ni bilmay turib so'rayapsizmi? Linux bu barcha "aqlli" qurilmalarning asosi va butun dunyo bo'ylab keng tarqalgan tizim hisoblanadi. Linux'ni asosan tajribali dasturchilar ishlatadi va u orqali turli-xil serverlar yaratish yoki buzish ham mumkin. Bundan tashqari, Linux'da personallashtirish uchun juda ko'p imkoniyatlar beriladi.  Xullas, qisqacha shular.

## Linux qiyinmi?

Ha, va yo'q. Avvaliga o'rganish qiyin, ammo Linux juda oddiy. Har qanday yangi narsani, jumladan Linux'ni o'rganishda amal qilish kerak bo'lgan oddiy qoida shundaki - u bilan qanchalik ko'p mash qilsangiz, shunchalik oson bo'ladi. Lekin menda buning aksi bo'lgan, qancha ko'p o'rgansam, shuncha kam bilishimni tushunib yetib, hamma narsani kechiktirardim. Lekin asosiy kalit o'rganishni izchil davom ettirishda ekan. Mana endi vaqt o'tib faqat o'zimga kerakli malumotlarni o'rgandim va olgan bilimlarim masofaviy serverlarni boshqarish, Docker orqali virtual mashinalar yaratish, apache, nginx kabi veb-serverlarni konfiguratsiya qilish, tasklarni avtomatlashtirish va Arduino, Raspberry kabi qurilmalar bilan ajoyib tajribalar o'tkazish imkonini berdi. 

## Linux'ni Android orqali o'rgansam bo'ladimi?

 Agar sizda kompyuter bo'lmasa, xavotir olmang, Android orqali Linux'ni bemalol o'rganish mumkin. Bilmagan bo'lsangiz: Android platformasining asosi Linux hisoblanadi. 
 
 1. [Termux](https://f-droid.org/en/packages/com.termux/) dasturini FDroid platformasidan tortib oling. Play marketdan o'rnatish tavsiya qilinmaydi chunki undagi versiya eskirgan.
 2. Ilova menejeri bilan tanishing. Biz bu yerdagi maqolalarda `apt` bilan ishlaymiz, lekin Termux'da ilove-menejeri `pkg` deb nomlangan. Misol uchun `nginx` o'rnatmoqchi bo'lsangiz: `pkg install nginx`
 3. Agar telefoningizda [root](https://youtu.be/_uxvvtl7bNc?si=nda_n-0Ak98EB-AM) o'rnatilgan bo'lsa ayni muddao! chunki bu yo'lingizda uchraydigan ko'plab to'siqlarni olib tashlaydi.  

>Kelajakda Android'ga maxsus operatsion tizimlar o'rnatish: LineageOS, GraphineOS; NetHunter o'rnatish, simsiz tarmoq hujumlari va qurilmangizni qanday qilib RubberDucky'ga aylantirish to'g'risida gaplashamiz inshoolloh

## Mendan nima talab qilinadi?

Operatsion tizimlar, dasturlash tillari, GUI/CLI va terminal haqida bilsangiz kifoya. Agar siz o'zingizni "power user" ya'ni kuchli foydalanuvchi deb hisoblasangiz ham bu darsliklar aynan siz uchun.

## Ingliz tilini bilaman, qaysi manbalarni maslahat berasiz?

Ingliz tilini bilsangiz, ayni muddao! Sizga [edx.org](https://edx.org) platformasidagi "Linux Foundation" bepul to'liq kursini tavsiya qilaman. [LinuxJourney.com](https://linuxjourney.com/) saytida ham foydali resurslar mavjud. Shuningdek, quyidagi YouTube kanallarga obuna bo'lishni unutmang:

- Learn Linux TV 
- Veronica Explains
- Network Chuck
- John Hammond
- FreeCodeCamp

## Savol bor...

Muommo yoki qo'shimcha savollar tug'ilsa, ushbu chatga qo'shilishingiz mumkin: [community-chat](https://linux.xumoyun.uz/community-chat)

### Fikr bildirish bepul

Biron bir diagramma yoki darsni tushunmasangiz yoki o'z fikr/mulohazalaringiz bilan o'rtoqlashmoqchi bo'lsangiz, mendan [t.me/comoyun](https://t.me/comoyun) orqali so'rashdan tortinmang. 