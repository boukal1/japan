import { Dialog } from '../../models/word.model';

export const SHOPPING_DIALOGS: Dialog[] = [
  // them first — entrée en magasin
  { id: 'sh-d-01', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'irasshaimase!', french: 'Bienvenue !' },
    { speaker: 'me', romaji: 'konnichiwa, chotto miteimasu, arigatou.', french: 'Bonjour, je regarde un peu, merci.' },
    { speaker: 'them', romaji: 'goyukkuri goran kudasai.', french: 'Prenez votre temps.' },
    { speaker: 'me', romaji: 'nani ka attara koe o kakemasu, arigatou gozaimasu.', french: 'Si je vois quelque chose, je vous appellerai, merci.' },
  ] },
  // me first — chercher souvenir
  { id: 'sh-d-02', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kazoku no omiyage o sagashite imasu, osusume wa arimasu ka?', french: 'Pardon, je cherche un souvenir pour ma famille, vous recommandez quoi ?' },
    { speaker: 'them', romaji: 'donna mono ga oki ni mesasu deshou ka?', french: 'Quel genre de chose vous plairait ?' },
    { speaker: 'me', romaji: 'wagashi ka komono ga ii desu, ichi-man-en gurai de.', french: 'Des pâtisseries japonaises ou un petit bibelot, autour de 10 000 yens.' },
    { speaker: 'them', romaji: 'kochira no wagashi wa ninki desu yo.', french: 'Ces pâtisseries japonaises sont très populaires.' },
  ] },
  // me first — cabine d'essayage
  { id: 'sh-d-03', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kore o shichaku shite mo ii desu ka?', french: 'Pardon, je peux essayer ceci ?' },
    { speaker: 'them', romaji: 'douzo, shichaku-shitsu wa kochira desu.', french: 'Oui, la cabine est par ici.' },
    { speaker: 'me', romaji: 'mou hitotsu ookii saizu mo shichaku shite ii desu ka?', french: 'Je peux aussi essayer la taille au-dessus ?' },
    { speaker: 'them', romaji: 'hai, eru-saizu mo motte mairimasu.', french: 'Oui, je vous apporte la L.' },
  ] },
  // them first — taille
  { id: 'sh-d-04', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'saizu wa nan desu ka?', french: 'Quelle taille ?' },
    { speaker: 'me', romaji: 'futsuu wa emu-saizu desu ga, kochira no buranndo wa shiremasen.', french: 'Je suis en M habituellement, mais cette marque je sais pas.' },
    { speaker: 'them', romaji: 'kochira wa sukoshi chiisai me desu, eru o osusume shimasu.', french: 'Cette marque taille petit, je vous conseille L.' },
    { speaker: 'me', romaji: 'sou desu ka, ja eru-saizu de shichaku shimasu.', french: 'Ah ok, j\'essaie en L alors.' },
  ] },
  // me first — autres couleurs
  { id: 'sh-d-05', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono shatsu wa hoka no iro mo arimasu ka?', french: 'Pardon, cette chemise, vous l\'avez dans d\'autres couleurs ?' },
    { speaker: 'them', romaji: 'aoi to kuroi mo gozaimasu yo.', french: 'On l\'a aussi en bleu et noir.' },
    { speaker: 'me', romaji: 'aoi no o misete itadakemasu ka? eru-saizu de.', french: 'Vous me montrez la bleue en L svp ?' },
    { speaker: 'them', romaji: 'hai, sugu motte mairimasu.', french: 'Oui, j\'arrive tout de suite.' },
  ] },
  // them first — cabine
  { id: 'sh-d-06', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'shichaku-shitsu wa kochira de gozaimasu.', french: 'La cabine d\'essayage est par ici.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, futatsu motte itte mo ii desu ka?', french: 'Merci, je peux en prendre deux à la fois ?' },
    { speaker: 'them', romaji: 'mittsu made daijoubu desu yo.', french: 'Jusqu\'à trois c\'est ok.' },
    { speaker: 'me', romaji: 'wakarimashita, ja kochira to kochira o.', french: 'D\'accord, alors celle-ci et celle-ci.' },
  ] },
  // me first — taille supérieure
  { id: 'sh-d-07', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kore no mou hitotsu ookii saizu wa arimasu ka?', french: 'Pardon, vous avez ce modèle en taille au-dessus ?' },
    { speaker: 'them', romaji: 'eru-saizu o omochi shimasu, shoushou omachi kudasai.', french: 'Je vous apporte la L, un instant.' },
    { speaker: 'me', romaji: 'arigatou, shichaku shite mo ii desu ka?', french: 'Merci, je peux l\'essayer ?' },
    { speaker: 'them', romaji: 'mochiron desu, kochira douzo.', french: 'Bien sûr, par ici.' },
  ] },
  // them first
  { id: 'sh-d-08', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'ookii saizu mo gozaimasu yo.', french: 'On l\'a aussi en plus grand.' },
    { speaker: 'me', romaji: 'ja eru-saizu de mou ichido shichaku shimasu, onegaishimasu.', french: 'Alors je ré-essaie en L svp.' },
    { speaker: 'them', romaji: 'hai, douzo, motte mairimasu.', french: 'Oui je vous la cherche.' },
    { speaker: 'me', romaji: 'arigatou, taihen tasukarimasu.', french: 'Merci, vous m\'aidez bien.' },
  ] },
  { id: 'sh-d-09', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'moushiwake gozaimasen, aka wa zaiko-girre de gozaimasu.', french: 'Désolé, le rouge est en rupture.' },
    { speaker: 'me', romaji: 'sou desu ka, ja ao de onegaishimasu, eru-saizu.', french: 'Ah ok, alors le bleu en L svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, motte mairimasu.', french: 'C\'est noté, je vous l\'apporte.' },
    { speaker: 'me', romaji: 'iroiro arigatou gozaimasu.', french: 'Merci pour tout.' },
  ] },
  // me first — hors-taxe
  { id: 'sh-d-10', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, menzei wa dekimasu ka? gaikokujin desu.', french: 'Pardon, je peux avoir la détaxe ? Je suis étranger.' },
    { speaker: 'them', romaji: 'hai, pasupooto o haiken shimasu.', french: 'Oui, votre passeport svp.' },
    { speaker: 'me', romaji: 'douzo, kopii wa torimasu ka?', french: 'Voici, vous en faites une copie ?' },
    { speaker: 'them', romaji: 'iie, kakunin dake de gozaimasu.', french: 'Non, juste vérification.' },
  ] },
  { id: 'sh-d-11', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'pasupooto o haiken shimasu.', french: 'Votre passeport svp.' },
    { speaker: 'me', romaji: 'douzo, kopii o torimasu ka?', french: 'Voici, vous faites une copie ?' },
    { speaker: 'them', romaji: 'iie, kakunin dake de gozaimasu.', french: 'Non, juste vérification.' },
    { speaker: 'me', romaji: 'wakarimashita, owattara kaeshite kudasai.', french: 'D\'accord, rendez-le moi après svp.' },
  ] },
  // me first — emballage cadeau
  { id: 'sh-d-12', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, purezento-you ni tsutsunde itadakemasu ka?', french: 'Pardon, vous pouvez l\'emballer en cadeau svp ?' },
    { speaker: 'them', romaji: 'mochiron desu, ribon no iro wa ikaga itashimasu ka?', french: 'Bien sûr, quelle couleur de ruban ?' },
    { speaker: 'me', romaji: 'akai ribon wa arimasu ka?', french: 'Vous avez du ruban rouge ?' },
    { speaker: 'them', romaji: 'aka mo gozaimasu, kashikomarimashita.', french: 'On a du rouge, noté.' },
  ] },
  // me first — pointure
  { id: 'sh-d-13', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, nijuu-roku-tenfun no kutsu wa arimasu ka?', french: 'Pardon, vous avez des chaussures en 26,5 ?' },
    { speaker: 'them', romaji: 'shoushou omachi kudasai, motte mairimasu.', french: 'Un instant svp, je vous les cherche.' },
    { speaker: 'me', romaji: 'futsuu no haba desu, sukoshi haba-hiroi no ga ii desu.', french: 'Largeur normale, légèrement plus large si possible.' },
    { speaker: 'them', romaji: 'wakarimashita, ryouhou motte mairimasu.', french: 'D\'accord, je vous apporte les deux.' },
  ] },
  // me first — sac en cuir
  { id: 'sh-d-14', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono baggu wa honkawa desu ka?', french: 'Pardon, ce sac est en vrai cuir ?' },
    { speaker: 'them', romaji: 'hai, hyaku-paasento honkawa de gozaimasu.', french: 'Oui, 100% cuir.' },
    { speaker: 'me', romaji: 'omoi desu ka? ryokou-you ni tsukaetai desu.', french: 'C\'est lourd ? Je voudrais l\'utiliser en voyage.' },
    { speaker: 'them', romaji: 'sukoshi omoi desu ga, jouubu desu yo.', french: 'Un peu lourd mais très résistant.' },
  ] },
  // me first — paiement + menzei
  { id: 'sh-d-15', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, okaikei onegaishimasu, menzei mo onegaishimasu.', french: 'Pardon, l\'addition svp, et la détaxe aussi.' },
    { speaker: 'them', romaji: 'kaado de yoroshii desu ka?', french: 'Carte ok ?' },
    { speaker: 'me', romaji: 'hai, pasupooto mo desu ne, douzo.', french: 'Oui, et voici mon passeport.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, tetsuzuki itashimasu.', french: 'Merci, je m\'occupe des formalités.' },
  ] },
  // them first
  { id: 'sh-d-16', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'yoroshii desu ka?', french: 'Ça vous va ?' },
    { speaker: 'me', romaji: 'hai, sore ni shimasu, fukuro wa irimasen.', french: 'Oui je le prends, pas besoin de sac.' },
    { speaker: 'them', romaji: 'kashikomarimashita, denshi-reshiito demo ii desu ka?', french: 'C\'est noté, reçu électronique ok ?' },
    { speaker: 'me', romaji: 'hai, kanyou wa arimasen.', french: 'Oui, pas de souci.' },
  ] },
  // me first — politique de retour
  { id: 'sh-d-17', situation: 'shopping', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono mise no henpin-poriishii o oshiete itadakemasu ka?', french: 'Pardon, vous pouvez m\'expliquer la politique de retour ?' },
    { speaker: 'them', romaji: 'nanoka inai de gozaimasu, reshiito ga hitsuyou desu.', french: 'Sous 7 jours avec le reçu.' },
    { speaker: 'me', romaji: 'wakarimashita, reshiito o taisetsu ni hokan shimasu.', french: 'D\'accord, je vais garder le reçu précieusement.' },
    { speaker: 'them', romaji: 'hai, taisetsu ni hokan kudasai.', french: 'Oui, gardez-le bien.' },
  ] },
  // them first
  { id: 'sh-d-18', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'purezento you ni shimasu ka?', french: 'Je l\'emballe pour cadeau ?' },
    { speaker: 'me', romaji: 'onegaishimasu, ribon wa aka ga aru nara akai no o.', french: 'Oui svp, en rouge si vous avez.' },
    { speaker: 'them', romaji: 'aka mo gozaimasu, kashikomarimashita.', french: 'On a du rouge, c\'est noté.' },
    { speaker: 'me', romaji: 'utsukushii desu ne, taihen kirei desu, arigatou.', french: 'C\'est très joli, merci.' },
  ] },
  { id: 'sh-d-19', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'fukuro wa fuyou desu ka?', french: 'Avez-vous besoin d\'un sac ?' },
    { speaker: 'me', romaji: 'iie, jibun no fukuro o motte imasu, daijoubu desu.', french: 'Non, j\'ai mon propre sac, ça va.' },
    { speaker: 'them', romaji: 'subarashii desu ne, ekoroji-shiidai.', french: 'Bien, c\'est écolo.' },
    { speaker: 'me', romaji: 'iie, sou-itte itadaki kasshite desu.', french: 'Vous me flattez.' },
  ] },
  { id: 'sh-d-20', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'arigatou gozaimashita, mata douzo.', french: 'Merci, revenez nous voir.' },
    { speaker: 'me', romaji: 'tanoshikatta desu, omiyage mo ki ni iri-mashita.', french: 'C\'était sympa, le souvenir me plaît bien.' },
    { speaker: 'them', romaji: 'ureshii desu, kanai-de mo douzo.', french: 'Ça nous fait plaisir, revenez avec votre famille.' },
    { speaker: 'me', romaji: 'hai, kanarazu mata kimasu, sayounara.', french: 'Oui, sans faute je reviendrai. Au revoir.' },
  ] },
];
