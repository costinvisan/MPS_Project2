# MPS_Project2

Proiect 2: Rezerva-ma 

Într-o organizație, resursele sunt împărtășite între echipe sau indivizi. Ne propunem să realizăm o platformă web prin care utilizatorii (membri ai unei organizații) să poată rezerva această resursă pentru o perioadă nelimitată de timp atunci când ea este disponibilă, să poată verifica starea în orice moment și să fie notificați atunci când resursa devine disponibilă.

Scopul proiectului
Se dorește construirea unui platforme web de rezervare de resurse la nivel de organizație. Unii dintre membri vor avea drept de rezervare a resursei, alții vor avea doar drept de vizualizare a resursei. Informațiile resursei care vor fi afișate în interfață vor corespunde următoarelor nevoi:

Care este starea ei?
Dacă este ocupată
O descriere a resursei
Cine a rezervat-o?
Cât timp a estimat că va fi rezervată?
De cât timp este rezervată?
O descriere a motivului rezervării
Un buton prin care utilizatorul se poate înscrie să fie notificat când resursa devine disponibilă
Dacă este disponibilă
O descriere a resursei
Istoricul celor mai recente rezervări (cine, de când, până când)
Un buton prin care utilizatorul poate rezerva resursa disponibilă
Descrierea proiectului
Pentru implementarea acestui sistem sunt necesare următoarele:

O bază de date în care se vor stoca informații despre organizații, resurse ale unei organizații, membri ai unei organizații (și implicit utilizatorii), istoricul de rezervare al resurselor, permisiunile utilizatorilor
Un sistem de stări (de exemplu, o resursă poate avea una dintre stările: disponibilă | ocupată | în curs de rezervare | sau orice altă stare intermediară) - se subînțelege aici că sunt necesare minim cele două stări: disponibil și rezervat
Un timer care va contoriza cât timp a trecut de când resursa este în starea X
Un sistem de autentificare și autorizare în platformă (un utilizator va avea acces doar la informații despre resursele din organizația din care face parte)
O interfață web/mobile prin care utilizatorul poate interacționa cu sistemul
Cazuri de utilizare
Instituțiile medicale – spitalele – Într-o secție a unui spital există mai multe blocuri operatorii (săli în care se fac operațiile). Una din problemele principale care se întâlnește în planificarea operațiilor dintr-o zi este că durata unei operații nu poate fi estimată niciodată exact. Deși există o ordine în care operațiile vor decurge într-o zi (stabilită de medicul de gardă și ceilalți colegi de tură), nu poate fi determinat exact momentul în care operația se va sfârși sau când următoarea va începe. Această constrângere determină doctorii principali și ceilalți participanți (doctor 2, asistente, anestezist) ai unei operații în așteptare să verifice regulat starea sălilor din aceea secție/departament de mai multe ori într-o zi. Această nevoie presupune deplasarea fiecăruia până la ușa blocului operator și verificarea (cu un participant la operație) care este starea sălii și cât timp mai durează operația. Printr-un simplu calcul matematic făcut în minte înțelegem faptul că pentru o operație următoare, mai multe persoane verifică mai multe săli de mai multe ori într-un interval de timp al unei zile până când operația poate avea loc. Toată această interacțiune presupune timp pierdut și multă mișcare pentru obținerea unui singur răspuns. Ne dorim să oferim acest răspuns instant cu minimul de efort posibil.

De menționat, pe parcursul unei zi pot interveni și operații neplanificate (urgențe). În cazul unei urgențe, se știe că timpul este foarte important. Posibilitatea de a afla instant care sală este disponibilă acum poate avea un impact pozitiv enorm în realizarea intervenției cu succes.
