import { Dialog } from '../../models/word.model';

export const HOTEL_DIALOGS: Dialog[] = [
  // me first — check-in
  { id: 'ho-d-01', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, yoyaku shite iru Pierre desu, chekkuin onegaishimasu.', french: 'Pardon, j\'ai une réservation au nom de Pierre, check-in svp.' },
    { speaker: 'them', romaji: 'kakunin shimasu, shoushou omachi kudasai.', french: 'Je vérifie, un instant svp.' },
    { speaker: 'me', romaji: 'hai, futari de san-paku desu.', french: 'Oui, deux personnes pour trois nuits.' },
    { speaker: 'them', romaji: 'wakarimashita, pasupooto o haiken shimasu.', french: 'Compris, votre passeport svp.' },
  ] },
  // them first
  { id: 'ho-d-02', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'pasupooto o haiken shimasu.', french: 'Je vérifie votre passeport.' },
    { speaker: 'me', romaji: 'douzo, futari-bun no pasupooto desu.', french: 'Voici, les deux passeports.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, kopii o torasete itadakimasu.', french: 'Merci, je fais une copie.' },
    { speaker: 'me', romaji: 'hai, douzo, owattara mata kudasai.', french: 'Oui, je vous en prie, rendez-le moi après.' },
  ] },
  { id: 'ho-d-03', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'kochira ni go-shomei o onegaishimasu.', french: 'Signez ici svp.' },
    { speaker: 'me', romaji: 'hai, kono ran de yoroshii desu ka?', french: 'D\'accord, dans cette case ?' },
    { speaker: 'them', romaji: 'hai, sono ran ni onegaishimasu.', french: 'Oui, dans cette case svp.' },
    { speaker: 'me', romaji: 'kakimashita, kakunin onegaishimasu.', french: 'Voilà, vérifiez svp.' },
  ] },
  // me first — clé chambre
  { id: 'ho-d-04', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, ruumukii o onegaishimasu, 502-goushitsu desu.', french: 'Pardon, ma clé svp, chambre 502.' },
    { speaker: 'them', romaji: 'kakunin shimashita, kochira ga kaado-kii de gozaimasu.', french: 'Confirmé, voici votre carte-clé.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, erebeetaa wa doko desu ka?', french: 'Merci, et l\'ascenseur est où ?' },
    { speaker: 'them', romaji: 'migi-gawa ni gozaimasu.', french: 'À droite.' },
  ] },
  // them first
  { id: 'ho-d-05', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'erebeetaa wa migi-gawa ni gozaimasu.', french: 'L\'ascenseur est à droite.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, choushoku wa nan-ji kara desu ka?', french: 'Merci, et le petit-déj est à partir de quelle heure ?' },
    { speaker: 'them', romaji: 'shichi-ji kara juu-ji made de gozaimasu.', french: 'De 7h à 10h.' },
    { speaker: 'me', romaji: 'wakarimashita, asu wa hachi-ji goro ikimasu.', french: 'D\'accord, j\'y vais vers 8h demain.' },
  ] },
  // me first — wifi
  { id: 'ho-d-06', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, wifi no pasuwaado o oshiete itadakemasu ka?', french: 'Pardon, vous pouvez me donner le mot de passe wifi ?' },
    { speaker: 'them', romaji: 'hai, kono kaado ni kakarete imasu.', french: 'Oui, c\'est écrit sur cette carte.' },
    { speaker: 'me', romaji: 'ze-en-iiki de tsukaemasu ka?', french: 'Ça capte partout dans l\'hôtel ?' },
    { speaker: 'them', romaji: 'hai, kakukai no roubii de mo tsukaemasu yo.', french: 'Oui, dans le lobby de chaque étage aussi.' },
  ] },
  // me first — petit-déjeuner
  { id: 'ho-d-07', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, choushoku wa nan-ji kara desu ka? basho mo oshiete kudasai.', french: 'Pardon, le petit-déj est à partir de quelle heure ? Et où ?' },
    { speaker: 'them', romaji: 'shichi-ji kara juu-ji made, ni-kai no resutoran de gozaimasu.', french: 'De 7h à 10h, au restaurant du 2e étage.' },
    { speaker: 'me', romaji: 'baikingu-shiki desu ka? washoku mo arimasu ka?', french: 'C\'est un buffet ? Il y a du japonais ?' },
    { speaker: 'them', romaji: 'hai, baikingu de, washoku to youshoku ryouhou gozaimasu.', french: 'Oui, buffet avec japonais et occidental.' },
  ] },
  // me first — onsen
  { id: 'ho-d-08', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, onsen wa doko ni arimasu ka?', french: 'Pardon, l\'onsen est où ?' },
    { speaker: 'them', romaji: 'ichi-kai no oku ni gozaimasu, taoru wa datsui-jo ni arimasu.', french: 'Au fond du rez-de-chaussée, les serviettes sont dans le vestiaire.' },
    { speaker: 'me', romaji: 'nan-ji made aite imasu ka?', french: 'Jusqu\'à quelle heure c\'est ouvert ?' },
    { speaker: 'them', romaji: 'yoru juu-ichi-ji made de gozaimasu.', french: 'Jusqu\'à 23h.' },
  ] },
  // them first
  { id: 'ho-d-09', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'yukata wa heya ni jouibi shite arimasu.', french: 'Le yukata est préparé dans la chambre.' },
    { speaker: 'me', romaji: 'saizu ga awanakattara doushitara ii desu ka?', french: 'Et si la taille ne convient pas ?' },
    { speaker: 'them', romaji: 'furonto ni go-renraku itadakereba o-toodoke shimasu.', french: 'Appelez la réception, on vous l\'apporte.' },
    { speaker: 'me', romaji: 'wakarimashita, doumo arigatou gozaimasu.', french: 'Compris, merci beaucoup.' },
  ] },
  { id: 'ho-d-10', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'ofuro wa ni-kai ni gozaimasu, mada riyou-chuu desu.', french: 'Le bain est au 2e étage, encore en service.' },
    { speaker: 'me', romaji: 'nan-ji made aitemasu ka?', french: 'Jusqu\'à quelle heure c\'est ouvert ?' },
    { speaker: 'them', romaji: 'yoru juu-ichi-ji made de gozaimasu.', french: 'Jusqu\'à 23h.' },
    { speaker: 'me', romaji: 'sore made ni iku you ni shimasu, arigatou.', french: 'J\'irai avant, merci.' },
  ] },
  // me first — serviettes / oreiller
  { id: 'ho-d-11', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, taoru o mou ni-mai to makura o hitotsu itadakemasu ka?', french: 'Pardon, je peux avoir deux serviettes de plus et un oreiller ?' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu o-todoke itashimasu.', french: 'Bien noté, on vous apporte ça tout de suite.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, juppun gurai de daijoubu desu ka?', french: 'Merci, dans 10 min c\'est bon ?' },
    { speaker: 'them', romaji: 'hai, sugu mairimasu.', french: 'Oui, j\'arrive très vite.' },
  ] },
  // them first
  { id: 'ho-d-12', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'kashikomarimashita, sugu uketsuke shimasu.', french: 'C\'est noté, on s\'en occupe.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, sumimasen.', french: 'Merci, désolé.' },
    { speaker: 'them', romaji: 'tonde mo gozaimasen, oyasuminasai.', french: 'Pas de souci, bonne nuit.' },
    { speaker: 'me', romaji: 'oyasuminasai, mata ashita.', french: 'Bonne nuit, à demain.' },
  ] },
  // me first — ménage
  { id: 'ho-d-13', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, kyou heya no souji o onegaishimasu, gozen-chuu ni haitte moraemasuka?', french: 'Pardon, le ménage de ma chambre aujourd\'hui, le matin c\'est possible ?' },
    { speaker: 'them', romaji: 'kashikomarimashita, nan-ji goro ga yoroshii desu ka?', french: 'C\'est noté, vers quelle heure ?' },
    { speaker: 'me', romaji: 'ku-ji goro wa ikaga desu ka?', french: 'Vers 9h ça vous va ?' },
    { speaker: 'them', romaji: 'daijoubu de gozaimasu, gofun gurai de owari masu.', french: 'C\'est possible, ça prend environ 5 minutes.' },
  ] },
  // them first
  { id: 'ho-d-14', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'oheya wa shizuka desu ka?', french: 'La chambre est calme ?' },
    { speaker: 'me', romaji: 'totemo shizuka desu ga, nani ka oto ga shimasu.', french: 'Très calme oui, mais il y a un petit bruit.' },
    { speaker: 'them', romaji: 'mou ichido kakunin sasete itadakimasu.', french: 'Je vais re-vérifier.' },
    { speaker: 'me', romaji: 'sumimasen, onegaishimasu.', french: 'Pardon, je vous remercie.' },
  ] },
  // me first — dépôt de bagages
  { id: 'ho-d-15', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, chekkuauto shita ato nimotsu o azukatte moraemasuka?', french: 'Pardon, après le check-out vous pouvez garder mes bagages ?' },
    { speaker: 'them', romaji: 'mochiron desu, kono fuda o omochi kudasai.', french: 'Bien sûr, prenez ce ticket.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, ato yo-jikan gurai de modori masu.', french: 'Merci, je reviens dans environ 4 heures.' },
    { speaker: 'them', romaji: 'wakarimashita, omachi shite imasu.', french: 'Compris, on vous attend.' },
  ] },
  // them first
  { id: 'ho-d-16', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'takkyuubin de okurimasu ka?', french: 'Vous voulez l\'envoyer en livraison ?' },
    { speaker: 'me', romaji: 'iie, jibun de motte ikimasu, arigatou.', french: 'Non, je l\'emporte moi-même, merci.' },
    { speaker: 'them', romaji: 'wakarimashita, takushii o oyobi shimashou ka?', french: 'D\'accord, j\'appelle un taxi ?' },
    { speaker: 'me', romaji: 'onegaishimasu, eki made de.', french: 'Oui svp, jusqu\'à la gare.' },
  ] },
  // me first — clé perdue
  { id: 'ho-d-17', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, ruumukii o nakushite shimaimashita, dou sureba ii desu ka?', french: 'Pardon, j\'ai perdu ma clé de chambre, que faire ?' },
    { speaker: 'them', romaji: 'go-shinpai naku, atarashii kaado-kii o tsukurimasu.', french: 'Pas de souci, on vous refait une carte-clé.' },
    { speaker: 'me', romaji: 'taihen sumimasen, jikan wa kakarimasu ka?', french: 'Vraiment désolé, ça prend longtemps ?' },
    { speaker: 'them', romaji: 'goofun gurai de dekimasu, sukoshi omachi kudasai.', french: 'Environ 5 minutes, un instant svp.' },
  ] },
  // me first — climatisation
  { id: 'ho-d-18', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, heya no eakon ga ugokanakunatte, tsumetai kaze ga denai no desu ga.', french: 'Pardon, ma climatisation ne marche plus, l\'air froid ne sort pas.' },
    { speaker: 'them', romaji: 'sugu sutaffu o yokoshi-masu, sukoshi omachi kudasai.', french: 'J\'envoie quelqu\'un tout de suite, un instant.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, yo-kai no heya desu.', french: 'Merci, je suis en chambre 404.' },
    { speaker: 'them', romaji: 'hai, sugu ukagai masu.', french: 'D\'accord, on arrive très vite.' },
  ] },
  // me first — check-out
  { id: 'ho-d-19', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, chekkuauto o onegaishimasu, kagi o kaeshimasu.', french: 'Pardon, je vais faire le check-out, je rends ma clé.' },
    { speaker: 'them', romaji: 'gokakunin sasete itadakimasu, sukoshi omachi kudasai.', french: 'Je vérifie, un instant svp.' },
    { speaker: 'me', romaji: 'minibaa wa mizu ippon dake nomimashita.', french: 'Pour le minibar, j\'ai juste bu une bouteille d\'eau.' },
    { speaker: 'them', romaji: 'mizu wa muryou de gozaimasu, mondai arimasen.', french: 'L\'eau est gratuite, pas de souci.' },
  ] },
  // them first
  { id: 'ho-d-20', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'minibaa wa otsukai ni narimashita ka?', french: 'Avez-vous utilisé le minibar ?' },
    { speaker: 'me', romaji: 'iie, mizu ippon dake nomimashita.', french: 'Non, juste une bouteille d\'eau.' },
    { speaker: 'them', romaji: 'mizu wa muryou de gozaimasu, mondai arimasen.', french: 'L\'eau est gratuite, pas de souci.' },
    { speaker: 'me', romaji: 'sou desu ka, yokatta desu.', french: 'Ah, tant mieux.' },
  ] },
  // me first — paiement
  { id: 'ho-d-21', situation: 'hotel', turns: [
    { speaker: 'me', romaji: 'sumimasen, okaikei o onegaishimasu.', french: 'Pardon, je voudrais régler l\'addition.' },
    { speaker: 'them', romaji: 'ryoukin wa zen-bu de juuni-man-en de gozaimasu.', french: 'Le total est de 120 000 yens.' },
    { speaker: 'me', romaji: 'kurejitto-kaado de oshiharai shimasu, ryoushuusho mo onegaishimasu.', french: 'Je règle par carte, et un reçu svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, douzo kochira ni okidashite kudasai.', french: 'Noté, insérez votre carte ici svp.' },
  ] },
  // them first
  { id: 'ho-d-22', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'ryoushuusho de gozaimasu, douzo.', french: 'Voici votre reçu.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, eki made aruite ikemasu ka?', french: 'Merci, on peut aller à pied à la gare ?' },
    { speaker: 'them', romaji: 'hai, juppun gurai desu.', french: 'Oui, environ 10 minutes.' },
    { speaker: 'me', romaji: 'wakarimashita, iroiro arigatou gozaimashita.', french: 'D\'accord, merci pour tout.' },
  ] },
  { id: 'ho-d-23', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'ki o tsukete go-kaeri kudasai.', french: 'Rentrez bien.' },
    { speaker: 'me', romaji: 'arigatou gozaimashita, totemo yokatta desu.', french: 'Merci beaucoup, c\'était très bien.' },
    { speaker: 'them', romaji: 'osoreirimasu, mata go-riyou kudasai.', french: 'Je vous remercie, à très bientôt.' },
    { speaker: 'me', romaji: 'mata kimasu, sayounara.', french: 'Je reviendrai, au revoir.' },
  ] },
  { id: 'ho-d-24', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'mata no go-riyou o omachi shite imasu.', french: 'Au plaisir de vous revoir.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, hoteru mo subarashii deshita.', french: 'Merci, l\'hôtel est vraiment super.' },
    { speaker: 'them', romaji: 'osoreirimasu, mata zehi.', french: 'Vous nous flattez, à très bientôt.' },
    { speaker: 'me', romaji: 'mata kimasu, ki o tsukete.', french: 'Je reviendrai, prenez soin de vous.' },
  ] },
  { id: 'ho-d-25', situation: 'hotel', turns: [
    { speaker: 'them', romaji: 'asagohan wa shichi-ji kara de gozaimasu.', french: 'Le petit-déj est à partir de 7h.' },
    { speaker: 'me', romaji: 'wakarimashita, basho wa doko desu ka?', french: 'D\'accord, c\'est où ?' },
    { speaker: 'them', romaji: 'ni-kai no resutoran de gozaimasu.', french: 'Au restaurant du 2e étage.' },
    { speaker: 'me', romaji: 'ni-kai desu ne, asu ikimasu, arigatou.', french: 'Le 2e, j\'y vais demain, merci.' },
  ] },
];
