import { Dialog } from '../../models/word.model';

export const TRANSPORT_DIALOGS: Dialog[] = [
  // me first — achat de billet
  { id: 'tr-d-01', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, Kyoto made no oufuku-kippu o ni-mai kudasai.', french: 'Pardon, deux billets aller-retour pour Kyoto svp.' },
    { speaker: 'them', romaji: 'shitei-seki ni nasaimasu ka?', french: 'En place réservée ?' },
    { speaker: 'me', romaji: 'hai, mado-gawa de futari narabi de onegaishimasu.', french: 'Oui, côté fenêtre, côte à côte svp.' },
    { speaker: 'them', romaji: 'kakunin shimashita, gokei ni-man-en ni narimasu.', french: 'Confirmé, ça fait 20 000 yens.' },
  ] },
  // them first
  { id: 'tr-d-02', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'katamichi desu ka, oufuku desu ka?', french: 'Aller simple ou aller-retour ?' },
    { speaker: 'me', romaji: 'oufuku de onegaishimasu, kaeri wa ashita no yoru desu.', french: 'Aller-retour svp, le retour c\'est demain soir.' },
    { speaker: 'them', romaji: 'wakarimashita, jikan o eranbi kudasai.', french: 'D\'accord, choisissez l\'horaire.' },
    { speaker: 'me', romaji: 'kaeri wa juuhachi-ji goro ga ii desu.', french: 'Pour le retour, vers 18h ce serait bien.' },
  ] },
  // me first — siège fenêtre
  { id: 'tr-d-03', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, shinkansen de mado-gawa no shitei-seki wa arimasu ka?', french: 'Pardon, y a-t-il encore des places réservées côté fenêtre dans le shinkansen ?' },
    { speaker: 'them', romaji: 'hai, mado-gawa wa ato sanseki gozaimasu.', french: 'Oui, il reste 3 places côté fenêtre.' },
    { speaker: 'me', romaji: 'futari narabi de toremasu ka?', french: 'Peut-on en avoir deux côte à côte ?' },
    { speaker: 'them', romaji: 'hai, futari narabi de daijobu desu, kakunin shimasu.', french: 'Oui, deux côte à côte c\'est possible, je vérifie.' },
  ] },
  // them first
  { id: 'tr-d-04', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'otona nan-mei desu ka?', french: 'Combien d\'adultes ?' },
    { speaker: 'me', romaji: 'otona futari to kodomo hitori desu.', french: 'Deux adultes et un enfant.' },
    { speaker: 'them', romaji: 'kodomo wa nan-sai desu ka?', french: 'Quel âge l\'enfant ?' },
    { speaker: 'me', romaji: 'kyuusai desu, kodomo-ryoukin de onegaishimasu.', french: '9 ans, en tarif enfant svp.' },
  ] },
  { id: 'tr-d-05', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'shichi-ji no shinkansen wa ikaga desu ka?', french: 'Le shinkansen de 19h vous va ?' },
    { speaker: 'me', romaji: 'mou sukoshi hayai no wa arimasu ka?', french: 'Y en a-t-il un un peu plus tôt ?' },
    { speaker: 'them', romaji: 'roku-ji-han no Nozomi mo gozaimasu yo.', french: 'Il y a aussi le Nozomi de 18h30.' },
    { speaker: 'me', romaji: 'sore ni shimasu, oufuku de onegaishimasu.', french: 'Je prends celui-là, en aller-retour svp.' },
  ] },
  { id: 'tr-d-06', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'shitei-seki to jiyuu-seki, dochira ga yoroshii desu ka?', french: 'Place réservée ou libre ?' },
    { speaker: 'me', romaji: 'shitei-seki onegaishimasu, sashigae arimasen ka?', french: 'Réservée svp, il y a de la disponibilité ?' },
    { speaker: 'them', romaji: 'hai, mada akiseki ga gozaimasu.', french: 'Oui, il reste des places.' },
    { speaker: 'me', romaji: 'yokatta desu, ja kore de onegaishimasu.', french: 'Tant mieux, alors comme ça svp.' },
  ] },
  // me first — paiement
  { id: 'tr-d-07', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, kurejitto-kaado de oshiharai dekimasu ka?', french: 'Pardon, je peux payer par carte de crédit ?' },
    { speaker: 'them', romaji: 'hai, douzo kochira ni okidashite kudasai.', french: 'Oui, tendez-la ici svp.' },
    { speaker: 'me', romaji: 'wakarimashita, reshiito mo onegaishimasu.', french: 'D\'accord, et un reçu svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, shoushou omachi kudasai.', french: 'Noté, un instant svp.' },
  ] },
  // them first
  { id: 'tr-d-08', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'go-ban-sen kara de gozaimasu.', french: 'C\'est sur la voie 5.' },
    { speaker: 'me', romaji: 'go-ban-sen wa achira desu ka?', french: 'La voie 5, c\'est par là ?' },
    { speaker: 'them', romaji: 'hai, esukareetaa de noborikatte kudasai.', french: 'Oui, prenez l\'escalator pour monter.' },
    { speaker: 'me', romaji: 'wakari-mashita, arigatou gozaimasu.', french: 'D\'accord, merci.' },
  ] },
  // me first — bon train ?
  { id: 'tr-d-09', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono densha wa Tokyo-eki ni tomarimasu ka?', french: 'Pardon, ce train s\'arrête à Tokyo ?' },
    { speaker: 'them', romaji: 'hai, futatsume no eki desu yo.', french: 'Oui, c\'est la deuxième gare.' },
    { speaker: 'me', romaji: 'Shinjuku ni mo tomarimasu ka?', french: 'Et il s\'arrête aussi à Shinjuku ?' },
    { speaker: 'them', romaji: 'hai, san-ban-me no eki desu.', french: 'Oui, c\'est la troisième gare.' },
  ] },
  // them first
  { id: 'tr-d-10', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'tsugi no eki wa Kyoto desu.', french: 'Prochaine gare : Kyoto.' },
    { speaker: 'me', romaji: 'sumimasen, koko de orimasu, doa wa migi-gawa desu ka?', french: 'Pardon, je descends ici. La porte c\'est à droite ?' },
    { speaker: 'them', romaji: 'hai, migi-gawa ga akimasu.', french: 'Oui, c\'est à droite que ça s\'ouvre.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, ki o tsukete.', french: 'Merci, faites attention à vous.' },
  ] },
  // me first — correspondance
  { id: 'tr-d-11', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, Shibuya de norikaeru n desu ga, nan-sen ni noreba ii desu ka?', french: 'Pardon, je dois changer à Shibuya, quelle ligne je prends ?' },
    { speaker: 'them', romaji: 'Hanzomon-sen ni norikaete kudasai, san-ban-sen kara desu.', french: 'Prenez la ligne Hanzōmon, voie 3.' },
    { speaker: 'me', romaji: 'Hanzomon-sen no noriba wa doko desu ka?', french: 'Où est le quai de la Hanzōmon ?' },
    { speaker: 'them', romaji: 'higashi-guchi o dete hidari desu.', french: 'Sortez côté est et tournez à gauche.' },
  ] },
  // them first
  { id: 'tr-d-12', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'okurete imasu, moushiwake gozaimasen.', french: 'Le train est en retard, désolé.' },
    { speaker: 'me', romaji: 'daijoubu desu, dono kurai okuremasu ka?', french: 'Pas grave, c\'est combien de retard ?' },
    { speaker: 'them', romaji: 'goofun gurai no okure desu.', french: 'Environ 5 minutes.' },
    { speaker: 'me', romaji: 'goofun nara mondai arimasen, arigatou.', french: '5 minutes c\'est rien, merci.' },
  ] },
  { id: 'tr-d-13', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'kono seki wa aite imasu ka?', french: 'Cette place est libre ?' },
    { speaker: 'me', romaji: 'hai, douzo, koshikakete kudasai.', french: 'Oui je vous en prie, asseyez-vous.' },
    { speaker: 'them', romaji: 'doumo, sumimasen.', french: 'Merci, désolé.' },
    { speaker: 'me', romaji: 'iie, tonde mo arimasen.', french: 'Je vous en prie, c\'est rien.' },
  ] },
  { id: 'tr-d-14', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'kippu o haiken shimasu.', french: 'Je vérifie votre billet.' },
    { speaker: 'me', romaji: 'douzo, kore desu, mado-gawa no shitei-seki desu.', french: 'Voici, c\'est une place réservée côté fenêtre.' },
    { speaker: 'them', romaji: 'kakunin shimashita, arigatou gozaimasu.', french: 'Vérifié, merci.' },
    { speaker: 'me', romaji: 'iie, gokurousama desu.', french: 'Je vous en prie, bon courage.' },
  ] },
  { id: 'tr-d-15', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'tsugi de orimashou ka?', french: 'On descend au prochain arrêt ?' },
    { speaker: 'me', romaji: 'hai, soko de orite, hashi no chikaku ni ikimasu.', french: 'Oui, on y descend, on va près du pont.' },
    { speaker: 'them', romaji: 'wakarimashita, isshou ni orimashou.', french: 'D\'accord, descendons ensemble.' },
    { speaker: 'me', romaji: 'arigatou, anshin shimashita.', french: 'Merci, je suis rassuré.' },
  ] },
  { id: 'tr-d-16', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'doa ga akimasu yo, ki o tsukete kudasai.', french: 'Porte qui s\'ouvre, attention.' },
    { speaker: 'me', romaji: 'hai, kiwotsukete orimasu, arigatou.', french: 'Oui je fais attention en descendant, merci.' },
    { speaker: 'them', romaji: 'douzo, ki o tsukete itterasshai.', french: 'Bonne route, faites attention.' },
    { speaker: 'me', romaji: 'iroiro arigatou gozaimashita.', french: 'Merci pour tout.' },
  ] },
  // me first — taxi
  { id: 'tr-d-17', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'kono jusho made onegaishimasu, goo-goru mappu de misete mo ii desu ka?', french: 'Cette adresse svp, je peux vous montrer sur Google Maps ?' },
    { speaker: 'them', romaji: 'hai, daijoubu desu, juppun gurai kakari masu.', french: 'Oui, pas de souci, ça prendra environ 10 min.' },
    { speaker: 'me', romaji: 'isoide imasen, yukkuri de kekkou desu.', french: 'Je ne suis pas pressé, prenez votre temps.' },
    { speaker: 'them', romaji: 'wakarimashita, sugu shuppatsu shimasu.', french: 'D\'accord, on part tout de suite.' },
  ] },
  // them first
  { id: 'tr-d-18', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'ryoushuusho wa ikaga desu ka?', french: 'Un reçu ?' },
    { speaker: 'me', romaji: 'onegaishimasu, kaisha-mei o kaite itadakemasu ka?', french: 'Oui svp, pouvez-vous mettre le nom de la société ?' },
    { speaker: 'them', romaji: 'hai, namae o oshiete kudasai.', french: 'Oui, donnez-moi le nom svp.' },
    { speaker: 'me', romaji: 'koko ni kaite arimasu, douzo.', french: 'C\'est écrit ici, voici.' },
  ] },
  { id: 'tr-d-19', situation: 'transport', turns: [
    { speaker: 'them', romaji: 'kochira de yoroshii desu ka?', french: 'Ici c\'est bon ?' },
    { speaker: 'me', romaji: 'mou sukoshi saki made onegaishimasu, akai kanban no temae de.', french: 'Un peu plus loin svp, juste avant le panneau rouge.' },
    { speaker: 'them', romaji: 'hai, koko desu ne.', french: 'Oui, ici donc.' },
    { speaker: 'me', romaji: 'sou desu, kochira de tomete kudasai.', french: 'Voilà, arrêtez-vous ici svp.' },
  ] },
  // me first — IC card
  { id: 'tr-d-20', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, suica wa doko de kazasu n desu ka?', french: 'Pardon, où je pose ma Suica ?' },
    { speaker: 'them', romaji: 'kaisatsu-guchi no kono aoi maaku ni kazashite kudasai.', french: 'Posez-la sur la marque bleue ici au portique.' },
    { speaker: 'me', romaji: 'wakarimashita, basu ya takushii de mo tsukaemasu ka?', french: 'Compris, ça marche aussi dans les bus et taxis ?' },
    { speaker: 'them', romaji: 'hai, basu ya takushii demo tsukaemasu yo.', french: 'Oui, bus et taxis aussi.' },
  ] },
  { id: 'tr-d-21', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, suica no zankin ga tarinai you desu, dou sureba ii desu ka?', french: 'Pardon, il me semble que ma Suica n\'a plus assez, que faire ?' },
    { speaker: 'them', romaji: 'asoko no kikai de chaaji dekimasu, ichi-sen-en kara desu.', french: 'Vous pouvez recharger à cette machine, à partir de 1 000 yens.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, eigo no menyu mo arimasu ka?', french: 'Merci, y a-t-il un menu en anglais ?' },
    { speaker: 'them', romaji: 'hai, doozo, eigo no menyu mo arimasu.', french: 'Oui, il y a un menu anglais.' },
  ] },
  { id: 'tr-d-22', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, IC kaado de kaisatsu o tooreru n desu ka?', french: 'Pardon, je peux passer les portiques avec une IC card ?' },
    { speaker: 'them', romaji: 'hai, midori no maaku no kaisatsu ni kazashite kudasai.', french: 'Oui, posez-la sur le portique avec la marque verte.' },
    { speaker: 'me', romaji: 'midori no rachi desu ne, wakarimashita.', french: 'Le portique vert, d\'accord.' },
    { speaker: 'them', romaji: 'hai, sugu tooremasu yo.', french: 'Oui, vous passerez directement.' },
  ] },
  { id: 'tr-d-23', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, san-ban no basu wa doko kara demasu ka?', french: 'Pardon, d\'où part le bus numéro 3 ?' },
    { speaker: 'them', romaji: 'go-ban noriba kara desu, kono michi o massugu migi-gawa desu.', french: 'De l\'arrêt 5, tout droit sur la droite.' },
    { speaker: 'me', romaji: 'go-ban-sen desu ne, basu wa nan-pun-oki ni kimasu ka?', french: 'L\'arrêt 5, le bus passe toutes les combien ?' },
    { speaker: 'them', romaji: 'goofun-oki ni kimasu yo.', french: 'Toutes les 5 minutes.' },
  ] },
  { id: 'tr-d-24', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, kyuukou to kakueki, dochira ni noreba hayai desu ka?', french: 'Pardon, express ou omnibus, lequel est plus rapide ?' },
    { speaker: 'them', romaji: 'kyuukou no hou ga hayai desu, juppun-go ni hassha shimasu.', french: 'L\'express est plus rapide, il part dans 10 minutes.' },
    { speaker: 'me', romaji: 'norikaewa hitsuyou desu ka?', french: 'Je dois changer ?' },
    { speaker: 'them', romaji: 'iie, chokusetsu iku koto ga dekimasu.', french: 'Non, c\'est direct.' },
  ] },
  { id: 'tr-d-25', situation: 'transport', turns: [
    { speaker: 'me', romaji: 'sumimasen, Shinjuku yuki no shuuden wa nan-ji desu ka?', french: 'Pardon, le dernier train pour Shinjuku est à quelle heure ?' },
    { speaker: 'them', romaji: 'juu-ni-ji desu yo, ki o tsukete kudasai.', french: 'À minuit, faites attention.' },
    { speaker: 'me', romaji: 'juu-ichi-ji-han ni dereba ma ni aimasu ka?', french: 'Si je pars à 23h30, j\'arrive à temps ?' },
    { speaker: 'them', romaji: 'hai, juubun ma ni aimasu yo.', french: 'Oui, largement.' },
  ] },
];
