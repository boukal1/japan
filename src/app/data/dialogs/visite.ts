import { Dialog } from '../../models/word.model';

export const VISITE_DIALOGS: Dialog[] = [
  { id: 'vi-d-01', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'irasshaimase, kankou desu ka?', french: 'Bienvenue, vous visitez ?' },
    { speaker: 'me', romaji: 'hai, otera o mitai n desu ga, otona ni-mai onegaishimasu.', french: 'Oui, je voudrais voir le temple, deux billets adulte svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, gokei sen-en de gozaimasu.', french: 'C\'est noté, ça fait 1 000 yens au total.' },
    { speaker: 'me', romaji: 'kaado de yoroshii desu ka?', french: 'Carte ok ?' },
  ] },
  { id: 'vi-d-02', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'otona ni-mai desu ne, gozonji sasete itadakimasu.', french: 'Deux billets adulte donc, je vous renseigne.' },
    { speaker: 'me', romaji: 'naka no oshikomi-jikan wa nan-pun gurai desu ka?', french: 'On met combien de temps à l\'intérieur ?' },
    { speaker: 'them', romaji: 'sou desu ne, ichi-jikan han gurai desu.', french: 'Hum, environ une heure et demie.' },
    { speaker: 'me', romaji: 'wakarimashita, jikan o totte mawarimasu.', french: 'D\'accord, je prendrai le temps.' },
  ] },
  { id: 'vi-d-03', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'nyuujou-ryou wa otona sen-en de gozaimasu.', french: 'L\'entrée coûte 1 000 yens par adulte.' },
    { speaker: 'me', romaji: 'kaado wa daijoubu desu ka? gakuwari nado wa arimasu ka?', french: 'Carte ok ? Y a-t-il des réductions étudiant ?' },
    { speaker: 'them', romaji: 'kaado wa daijoubu desu, gakusei-shou ga areba waribiki ari masu.', french: 'Carte ok, oui réduction sur présentation de la carte étudiante.' },
    { speaker: 'me', romaji: 'sou desu ka, kondo motte kimasu, kyou wa otona de.', french: 'Ah ok, j\'amènerai la prochaine fois, aujourd\'hui en adulte.' },
  ] },
  { id: 'vi-d-04', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kochira ga annai-zu de gozaimasu.', french: 'Voici le plan.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, osusume no koosu wa arimasu ka?', french: 'Merci, vous avez un parcours recommandé ?' },
    { speaker: 'them', romaji: 'maruishi de mawaru no ga ichiban miyasui desu.', french: 'Faire le tour dans le sens des aiguilles est le plus simple.' },
    { speaker: 'me', romaji: 'wakari-yasui desu ne, sou shimasu.', french: 'C\'est clair, je vais faire ça.' },
  ] },
  { id: 'vi-d-05', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'ato san-juppun de heikan to narimasu.', french: 'On ferme dans 30 minutes.' },
    { speaker: 'me', romaji: 'sou desu ka, hayaku mawatta hou ga ii desu ne.', french: 'Ah bon, je vais accélérer alors.' },
    { speaker: 'them', romaji: 'osusume no basho wa hidari oku desu yo.', french: 'L\'endroit le plus intéressant est au fond à gauche.' },
    { speaker: 'me', romaji: 'soko ni shibachi-ni mukaimasu, oshiete kurete arigatou.', french: 'Je m\'y dirige, merci de l\'info.' },
  ] },
  { id: 'vi-d-06', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kochira de wa shashin wa daijoubu desu yo.', french: 'Ici la photo est OK.' },
    { speaker: 'me', romaji: 'yokatta, fureshu wa tsukatte mo ii desu ka?', french: 'Tant mieux, le flash est autorisé ?' },
    { speaker: 'them', romaji: 'fureshu wa goenryo kudasai.', french: 'Pas de flash svp.' },
    { speaker: 'me', romaji: 'wakarimashita, fureshu nashi de torimasu, arigatou.', french: 'Compris, je prendrai sans flash, merci.' },
  ] },
  { id: 'vi-d-07', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kochira de wa shashin wa goenryo kudasai.', french: 'Pas de photo ici svp.' },
    { speaker: 'me', romaji: 'sumimasen, dekai-mae ni kakunin shimasu, yokatta desu.', french: 'Pardon, j\'aurais dû demander avant, ouf.' },
    { speaker: 'them', romaji: 'tonde mo arimasen, yoku kiite kudasai.', french: 'Pas de problème, demandez si vous avez un doute.' },
    { speaker: 'me', romaji: 'kiitsukete kudasari arigatou gozaimasu.', french: 'Merci de me l\'avoir signalé.' },
  ] },
  { id: 'vi-d-08', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'okutsu o nuide oagari kudasai.', french: 'Enlevez vos chaussures et entrez svp.' },
    { speaker: 'me', romaji: 'okutsu wa doko ni okeba ii desu ka?', french: 'Où je laisse mes chaussures ?' },
    { speaker: 'them', romaji: 'kochira no kutsubako ni douzo.', french: 'Dans ce casier à chaussures.' },
    { speaker: 'me', romaji: 'wakarimashita, suuji no fuda wa motte ikimasu ne.', french: 'D\'accord, je prends le ticket numéroté.' },
  ] },
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
  { id: 'vi-d-12', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'kankou-annai wa muryou de gozaimasu.', french: 'Le guide audio est gratuit.' },
    { speaker: 'me', romaji: 'sou desu ka, eigo de mo arimasu ka?', french: 'Ah bon, vous l\'avez en anglais ?' },
    { speaker: 'them', romaji: 'hai, eigo to chuugokugo to furansugo no ban ga gozaimasu.', french: 'Oui, en anglais, chinois et français.' },
    { speaker: 'me', romaji: 'furansugo de onegai dekimasu ka?', french: 'En français svp ?' },
  ] },
  { id: 'vi-d-13', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'eigyou-jikan wa juu-shichi-ji made de gozaimasu.', french: 'Ouvert jusqu\'à 17h.' },
    { speaker: 'me', romaji: 'saigo no nyuujou wa nan-ji desu ka?', french: 'Dernière entrée à quelle heure ?' },
    { speaker: 'them', romaji: 'juuroku-ji-han ga saigo de gozaimasu.', french: 'À 16h30.' },
    { speaker: 'me', romaji: 'wakarimashita, jikan ni ki o tsukemasu.', french: 'Compris, je ferai attention au temps.' },
  ] },
  { id: 'vi-d-14', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'moushiwake gozaimasen, kyou wa kyuukan-bi de gozaimasu.', french: 'Désolé, aujourd\'hui c\'est fermé.' },
    { speaker: 'me', romaji: 'aa, zannen desu, asu wa hairemasu ka?', french: 'Ah, dommage, demain c\'est ouvert ?' },
    { speaker: 'them', romaji: 'asu wa kuji kara aite imasu.', french: 'Demain à partir de 9h.' },
    { speaker: 'me', romaji: 'wakarimashita, asu mata kimasu.', french: 'D\'accord, je reviendrai demain.' },
  ] },
  { id: 'vi-d-15', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'deguchi wa achira de gozaimasu.', french: 'La sortie est par là.' },
    { speaker: 'me', romaji: 'omiyage-ya wa deguchi no chikaku desu ka?', french: 'La boutique de souvenirs est près de la sortie ?' },
    { speaker: 'them', romaji: 'hai, deguchi no migi-gawa ni gozaimasu.', french: 'Oui, à droite de la sortie.' },
    { speaker: 'me', romaji: 'tachiyote mimasu, arigatou gozaimasu.', french: 'Je vais y faire un tour, merci.' },
  ] },
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
  { id: 'vi-d-19', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'goshuin-chou wa motte irasshaimasu ka?', french: 'Vous avez un carnet de sceaux ?' },
    { speaker: 'me', romaji: 'iie, koko de kaemasu ka?', french: 'Non, je peux en acheter un ici ?' },
    { speaker: 'them', romaji: 'hai, sen-go-hyaku-en de gozaimasu.', french: 'Oui, à 1 500 yens.' },
    { speaker: 'me', romaji: 'ja, hitotsu kudasai, isshou ni o-shuin mo onegaishimasu.', french: 'Alors j\'en prends un, et le sceau aussi svp.' },
  ] },
  { id: 'vi-d-20', situation: 'visite', turns: [
    { speaker: 'them', romaji: 'yukkuri goran kudasai.', french: 'Prenez votre temps pour visiter.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, koukan-saido yotai desu.', french: 'Merci, cela m\'enchante.' },
    { speaker: 'them', romaji: 'enjoy-shite kudasai, mata oide kudasai.', french: 'Profitez bien, revenez nous voir.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu, doumo arigatou.', french: 'Je reviendrai sans faute, merci.' },
  ] },
];
