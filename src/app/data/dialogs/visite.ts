import { Dialog } from '../../models/word.model';

export const VISITE_DIALOGS: Dialog[] = [
  // me first — acheter billet
  { id: 'vi-d-01', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, otona ni-mai kudasai, gaikokujin no waribiki wa arimasu ka?', french: 'Pardon, deux billets adulte svp, y a-t-il une réduction pour étrangers ?' },
    { speaker: 'them', romaji: 'otona ni-mai wa gokei sen-en, gaikokujin waribiki wa gozaimasen.', french: 'Deux adultes c\'est 1 000 yens, pas de réduction pour étrangers.' },
    { speaker: 'me', romaji: 'wakarimashita, kaado de yoroshii desu ka?', french: 'D\'accord, je peux payer par carte ?' },
    { speaker: 'them', romaji: 'hai, douzo.', french: 'Oui, bien sûr.' },
  ] },
  // them first
  { id: 'vi-d-02', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'otona ni-mai desu ne, gozonji sasete itadakimasu.', french: 'Deux billets adulte donc, je vous renseigne.' },
    { speaker: 'me', romaji: 'naka no oshikomi-jikan wa nan-pun gurai desu ka?', french: 'On met combien de temps à l\'intérieur ?' },
    { speaker: 'them', romaji: 'sou desu ne, ichi-jikan han gurai desu.', french: 'Hum, environ une heure et demie.' },
    { speaker: 'me', romaji: 'wakarimashita, jikan o totte mawarimasu.', french: 'D\'accord, je prendrai le temps.' },
  ] },
  // me first — prix / réduction
  { id: 'vi-d-03', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, nyuujou-ryou wa ikura desu ka? gakuwari nado wa arimasu ka?', french: 'Pardon, l\'entrée c\'est combien ? Y a-t-il une réduction étudiant ?' },
    { speaker: 'them', romaji: 'otona sen-en, gakusei-shou ga areba waribiki arimasu.', french: '1 000 yens adulte, réduction sur présentation de la carte étudiante.' },
    { speaker: 'me', romaji: 'gaikokujin no gakusei-shou de mo daijoubu desu ka?', french: 'Une carte étudiante étrangère ça marche aussi ?' },
    { speaker: 'them', romaji: 'hai, daijoubu de gozaimasu.', french: 'Oui, ça fonctionne.' },
  ] },
  // me first — plan
  { id: 'vi-d-04', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, annai-zu wa arimasu ka? nihongo igai de mo arimasu ka?', french: 'Pardon, y a-t-il un plan ? Dans d\'autres langues que le japonais ?' },
    { speaker: 'them', romaji: 'eigo to furansugo no ban mo gozaimasu, douzo.', french: 'On a aussi en anglais et en français, tenez.' },
    { speaker: 'me', romaji: 'furansugo-ban o itadakemasu ka?', french: 'Je peux avoir la version française ?' },
    { speaker: 'them', romaji: 'hai, kochira douzo.', french: 'Oui, la voici.' },
  ] },
  // them first
  { id: 'vi-d-05', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'ato san-juppun de heikan to narimasu.', french: 'On ferme dans 30 minutes.' },
    { speaker: 'me', romaji: 'sou desu ka, hayaku mawatta hou ga ii desu ne.', french: 'Ah bon, je vais accélérer alors.' },
    { speaker: 'them', romaji: 'osusume no basho wa hidari oku desu yo.', french: 'L\'endroit le plus intéressant est au fond à gauche.' },
    { speaker: 'me', romaji: 'soko ni shibachi-ni mukaimasu, oshiete kurete arigatou.', french: 'Je m\'y dirige, merci de l\'info.' },
  ] },
  // me first — photos
  { id: 'vi-d-06', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, koko de shashin o totte mo ii desu ka?', french: 'Pardon, je peux prendre des photos ici ?' },
    { speaker: 'them', romaji: 'hai, douzo, fureshu wa goenryo kudasai.', french: 'Oui, je vous en prie, mais pas de flash svp.' },
    { speaker: 'me', romaji: 'wakarimashita, fureshu wa tsukaimasen.', french: 'Compris, je n\'utilise pas le flash.' },
    { speaker: 'them', romaji: 'goyukkuri totte kudasai.', french: 'Prenez votre temps.' },
  ] },
  // them first
  { id: 'vi-d-07', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kochira de wa shashin wa goenryo kudasai.', french: 'Pas de photo ici svp.' },
    { speaker: 'me', romaji: 'sumimasen, dekai-mae ni kakunin shimasu, yokatta desu.', french: 'Pardon, j\'aurais dû demander avant, ouf.' },
    { speaker: 'them', romaji: 'tonde mo arimasen, yoku kiite kudasai.', french: 'Pas de problème, demandez si vous avez un doute.' },
    { speaker: 'me', romaji: 'kiitsukete kudasari arigatou gozaimasu.', french: 'Merci de me l\'avoir signalé.' },
  ] },
  // me first — chaussures
  { id: 'vi-d-08', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, naka ni hairu mae ni kutsu o nugeba ii desu ka?', french: 'Pardon, je dois enlever mes chaussures avant d\'entrer ?' },
    { speaker: 'them', romaji: 'hai, kochira no kutsubako ni irette kudasai.', french: 'Oui, rangez-les dans ce casier.' },
    { speaker: 'me', romaji: 'suuji no fuda wa motte ite mo ii desu ka?', french: 'Je garde le ticket numéroté ?' },
    { speaker: 'them', romaji: 'mochiron desu, kaeru toki ni tsukaimasu.', french: 'Bien sûr, vous en aurez besoin en repartant.' },
  ] },
  // them first
  { id: 'vi-d-09', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'shizuka ni onegaishimasu.', french: 'Silence svp.' },
    { speaker: 'me', romaji: 'sumimasen, koe o kontoroorushi-masu.', french: 'Pardon, je vais baisser la voix.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, sasshite ne.', french: 'Merci, vous comprendrez.' },
    { speaker: 'me', romaji: 'wakarimashita, ki o tsuke-masu.', french: 'D\'accord, je ferai attention.' },
  ] },
  { id: 'vi-d-10', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'satsuei-kinshi to natte orimasu.', french: 'La photographie est interdite ici.' },
    { speaker: 'me', romaji: 'shitsurei shimashita, doko nara torete ii desu ka?', french: 'Pardon, où peut-on prendre des photos ?' },
    { speaker: 'them', romaji: 'soto no niwa de wa daijoubu desu yo.', french: 'Dans le jardin extérieur c\'est ok.' },
    { speaker: 'me', romaji: 'sou desu ka, soto de torimasu, arigatou.', french: 'Ah ok, je prendrai dehors, merci.' },
  ] },
  { id: 'vi-d-11', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'guruupu de gozaimasu ka?', french: 'Êtes-vous en groupe ?' },
    { speaker: 'me', romaji: 'iie, futari dake desu, jiyuu kankou desu.', french: 'Non, juste deux, on visite librement.' },
    { speaker: 'them', romaji: 'sore deshitara, kochira no chizu wo douzo.', french: 'Dans ce cas, prenez ce plan.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, taihen tasukari masu.', french: 'Merci, ça aide beaucoup.' },
  ] },
  // me first — guide audio
  { id: 'vi-d-12', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, odia gaido nado wa arimasu ka? furansugo de mo?', french: 'Pardon, y a-t-il un guide audio ? En français aussi ?' },
    { speaker: 'them', romaji: 'hai, muryou de, eigo to furansugo mo gozaimasu.', french: 'Oui, gratuit, disponible en anglais et en français.' },
    { speaker: 'me', romaji: 'furansugo de onegai dekimasu ka?', french: 'En français svp ?' },
    { speaker: 'them', romaji: 'hai, kochira douzo.', french: 'Oui, le voici.' },
  ] },
  // me first — fermeture
  { id: 'vi-d-13', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, nan-ji made aite imasu ka? saigo no nyuujou wa itsu desu ka?', french: 'Pardon, ouvert jusqu\'à quelle heure ? Et la dernière entrée ?' },
    { speaker: 'them', romaji: 'eigyou-jikan wa juu-shichi-ji made, saigo wa juuroku-ji-han desu.', french: 'Ouvert jusqu\'à 17h, dernière entrée à 16h30.' },
    { speaker: 'me', romaji: 'wakarimashita, jikan ni ki o tsukemasu.', french: 'Compris, je ferai attention au temps.' },
    { speaker: 'them', romaji: 'goyukkuri goran kudasai.', french: 'Prenez votre temps pour visiter.' },
  ] },
  // them first
  { id: 'vi-d-14', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'moushiwake gozaimasen, kyou wa kyuukan-bi de gozaimasu.', french: 'Désolé, aujourd\'hui c\'est fermé.' },
    { speaker: 'me', romaji: 'aa, zannen desu, asu wa hairemasu ka?', french: 'Ah, dommage, demain c\'est ouvert ?' },
    { speaker: 'them', romaji: 'asu wa kuji kara aite imasu.', french: 'Demain à partir de 9h.' },
    { speaker: 'me', romaji: 'wakarimashita, asu mata kimasu.', french: 'D\'accord, je reviendrai demain.' },
  ] },
  // me first — boutique souvenirs
  { id: 'vi-d-15', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, omiyage-ya wa doko ni arimasu ka?', french: 'Pardon, la boutique de souvenirs est où ?' },
    { speaker: 'them', romaji: 'deguchi no migi-gawa ni gozaimasu.', french: 'À droite de la sortie.' },
    { speaker: 'me', romaji: 'nani ga osusume desu ka?', french: 'Qu\'est-ce que vous recommandez ?' },
    { speaker: 'them', romaji: 'otera no hankachi ya omamori ga ninki desu.', french: 'Les mouchoirs du temple et les amulettes sont populaires.' },
  ] },
  // them first
  { id: 'vi-d-16', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kinen no shashin wa ikaga desu ka?', french: 'Une photo souvenir ?' },
    { speaker: 'me', romaji: 'onegai dekimasu ka, futari de torete kuremasu ka?', french: 'Vous voulez bien ? À deux ensemble ?' },
    { speaker: 'them', romaji: 'mochiron desu, koko ni tatte kudasai.', french: 'Bien sûr, mettez-vous ici.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, hai chiizu!', french: 'Merci ! Allez, cheese !' },
  ] },
  { id: 'vi-d-17', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'muryou no panfuretto desu, douzo.', french: 'Brochure gratuite, prenez.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, furansugo-ban wa arimasu ka?', french: 'Merci, en avez-vous une en français ?' },
    { speaker: 'them', romaji: 'hai, kochira ni gozaimasu.', french: 'Oui, la voici.' },
    { speaker: 'me', romaji: 'taihen tasukarimasu, doumo arigatou gozaimasu.', french: 'Ça m\'aide bien, merci.' },
  ] },
  { id: 'vi-d-18', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'tenboudai wa juuni-kai de gozaimasu.', french: 'Le belvédère est au 12e.' },
    { speaker: 'me', romaji: 'erebeetaa wa achira desu ka?', french: 'L\'ascenseur est par là ?' },
    { speaker: 'them', romaji: 'hai, oku no migi-gawa ni gozaimasu.', french: 'Oui, au fond à droite.' },
    { speaker: 'me', romaji: 'wakarimashita, sugu noborimasu, arigatou.', french: 'Compris, je monte tout de suite, merci.' },
  ] },
  // me first — goshuin-cho
  { id: 'vi-d-19', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'sumimasen, goshuin-chou o kaitai n desu ga, koko de kaemasu ka?', french: 'Pardon, je voudrais un carnet de sceaux, je peux en acheter un ici ?' },
    { speaker: 'them', romaji: 'hai, sen-go-hyaku-en de gozaimasu.', french: 'Oui, à 1 500 yens.' },
    { speaker: 'me', romaji: 'ja hitotsu kudasai, isshou ni o-shuin mo onegaishimasu.', french: 'Alors j\'en prends un, et le sceau aussi svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, kaite mairimasu.', french: 'C\'est noté, je l\'écris.' },
  ] },
  // me first — au revoir
  { id: 'vi-d-20', situation: 'visite', turns: [
    { speaker: 'me', romaji: 'totemo yokatta desu, iroiro arigatou gozaimashita.', french: 'C\'était super, merci pour tout.' },
    { speaker: 'them', romaji: 'osoreirimasu, mata zehi oide kudasai.', french: 'Je vous remercie, revenez nous voir.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu, tomodachi ni mo oshiemasu.', french: 'Je reviendrai sans faute, et j\'en parlerai à mes amis.' },
    { speaker: 'them', romaji: 'douzo, ii tabi o.', french: 'Avec plaisir, bon voyage.' },
  ] },
];
