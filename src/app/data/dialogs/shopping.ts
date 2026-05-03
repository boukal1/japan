import { Dialog } from '../../models/word.model';

export const SHOPPING_DIALOGS: Dialog[] = [
  { id: 'sh-d-01', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'irasshaimase!', french: 'Bienvenue !' },
    { speaker: 'me', romaji: 'konnichiwa, chotto miteimasu, arigatou.', french: 'Bonjour, je regarde un peu, merci.' },
    { speaker: 'them', romaji: 'goyukkuri goran kudasai.', french: 'Prenez votre temps.' },
    { speaker: 'me', romaji: 'nani ka attara koe o kakemasu, arigatou gozaimasu.', french: 'Si je vois quelque chose, je vous appellerai, merci.' },
  ] },
  { id: 'sh-d-02', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'nani ka osagashi desu ka?', french: 'Vous cherchez quelque chose ?' },
    { speaker: 'me', romaji: 'omiyage o sagashite imasu, kazoku ni agetai n desu.', french: 'Je cherche un souvenir pour ma famille.' },
    { speaker: 'them', romaji: 'donna mono ga oki ni mesasu deshou ka?', french: 'Quel genre de chose vous plairait ?' },
    { speaker: 'me', romaji: 'wagashi ka, chiisai komono ga ii desu.', french: 'Des pâtisseries japonaises ou un petit bibelot.' },
  ] },
  { id: 'sh-d-03', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'shichaku shitemo daijoubu desu yo.', french: 'Vous pouvez essayer.' },
    { speaker: 'me', romaji: 'onegaishimasu, mou hitotsu ookii saizu wa arimasu ka?', french: 'Oui svp, vous l\'avez en taille au-dessus ?' },
    { speaker: 'them', romaji: 'hai, eru-saizu mo gozaimasu.', french: 'Oui, en L aussi.' },
    { speaker: 'me', romaji: 'futatsu shichaku shitemo ii desu ka?', french: 'Je peux essayer les deux ?' },
  ] },
  { id: 'sh-d-04', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'saizu wa nan desu ka?', french: 'Quelle taille ?' },
    { speaker: 'me', romaji: 'futsuu wa emu-saizu desu ga, kochira no buranndo wa shiremasen.', french: 'Je suis en M habituellement, mais cette marque je sais pas.' },
    { speaker: 'them', romaji: 'kochira wa sukoshi chiisai me desu, eru o osusume shimasu.', french: 'Cette marque taille petit, je vous conseille L.' },
    { speaker: 'me', romaji: 'sou desu ka, ja eru-saizu de shichaku shimasu.', french: 'Ah ok, j\'essaie en L alors.' },
  ] },
  { id: 'sh-d-05', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'kono shiroi shatsu wa ikaga desu ka?', french: 'Cette chemise blanche ?' },
    { speaker: 'me', romaji: 'kawaii desu ne, hoka no iro mo arimasu ka?', french: 'Elle est jolie, vous l\'avez dans d\'autres couleurs ?' },
    { speaker: 'them', romaji: 'aoi to kuroi mo gozaimasu yo.', french: 'On l\'a aussi en bleu et noir.' },
    { speaker: 'me', romaji: 'aoi mo mitai desu, misete itadakemasu ka?', french: 'Je veux voir la bleue aussi, vous me la montrez ?' },
  ] },
  { id: 'sh-d-06', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'shichaku-shitsu wa kochira de gozaimasu.', french: 'La cabine d\'essayage est par ici.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, futatsu motte itte mo ii desu ka?', french: 'Merci, je peux en prendre deux à la fois ?' },
    { speaker: 'them', romaji: 'mittsu made daijoubu desu yo.', french: 'Jusqu\'à trois c\'est ok.' },
    { speaker: 'me', romaji: 'wakarimashita, ja kochira to kochira o.', french: 'D\'accord, alors celle-ci et celle-ci.' },
  ] },
  { id: 'sh-d-07', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'ikaga deshita ka?', french: 'Cela vous a plu ?' },
    { speaker: 'me', romaji: 'chotto chiisai desu, mou hitotsu ookii no wa arimasu ka?', french: 'Un peu petit, vous avez plus grand ?' },
    { speaker: 'them', romaji: 'eru-saizu o omochi shimasu, shoushou omachi kudasai.', french: 'Je vous apporte la L, un instant svp.' },
    { speaker: 'me', romaji: 'arigatou, omachi shite imasu.', french: 'Merci, j\'attends.' },
  ] },
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
  { id: 'sh-d-10', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'menzei de yoroshii desu ka?', french: 'En hors-taxe ?' },
    { speaker: 'me', romaji: 'hai, gaikokujin desu, pasupooto wa kochira desu.', french: 'Oui je suis étranger, voici mon passeport.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, tetsuzuki itashimasu.', french: 'Merci, je m\'occupe des formalités.' },
    { speaker: 'me', romaji: 'jikan kakari masu ka?', french: 'Ça prend combien de temps ?' },
  ] },
  { id: 'sh-d-11', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'pasupooto o haiken shimasu.', french: 'Votre passeport svp.' },
    { speaker: 'me', romaji: 'douzo, kopii o torimasu ka?', french: 'Voici, vous faites une copie ?' },
    { speaker: 'them', romaji: 'iie, kakunin dake de gozaimasu.', french: 'Non, juste vérification.' },
    { speaker: 'me', romaji: 'wakarimashita, owattara kaeshite kudasai.', french: 'D\'accord, rendez-le moi après svp.' },
  ] },
  { id: 'sh-d-12', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'omiyage de gozaimasu ka?', french: 'C\'est un souvenir ?' },
    { speaker: 'me', romaji: 'hai, betsu-betsu ni tsutsunde itadakemasu ka?', french: 'Oui, vous pouvez les emballer séparément ?' },
    { speaker: 'them', romaji: 'mochiron desu, dareyou ni shimashou ka?', french: 'Bien sûr, je sépare comment ?' },
    { speaker: 'me', romaji: 'mittsu ni wakete kudasai, sorezore.', french: 'En trois paquets svp, chacun.' },
  ] },
  { id: 'sh-d-13', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'okutsu wa nan-saizu desu ka?', french: 'Quelle pointure ?' },
    { speaker: 'me', romaji: 'nijuu-roku-tenfun-no, futsuu no haba desu.', french: '26.5, largeur normale.' },
    { speaker: 'them', romaji: 'shoushou omachi kudasai, motte mairimasu.', french: 'Un instant svp, je vous les cherche.' },
    { speaker: 'me', romaji: 'sumimasen, onegaishimasu.', french: 'Pardon, je vous remercie.' },
  ] },
  { id: 'sh-d-14', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'kochira wa hyaku-paasento honkawa de gozaimasu.', french: 'Ce sac est 100% cuir.' },
    { speaker: 'me', romaji: 'ki ni iri-mashita, omoi desu ka?', french: 'Ça me plaît, c\'est lourd ?' },
    { speaker: 'them', romaji: 'sukoshi omoi desu ga, jouubu desu yo.', french: 'Un peu lourd mais résistant.' },
    { speaker: 'me', romaji: 'kore ni shimasu, oshiete kurete arigatou.', french: 'Je le prends, merci de m\'avoir conseillé.' },
  ] },
  { id: 'sh-d-15', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'gokei san-man-en de gozaimasu.', french: 'Cela fait 30 000 yens.' },
    { speaker: 'me', romaji: 'kaado de oshiharai dekimasu ka, ato menzei mo onegaishimasu.', french: 'Carte ok, et le hors-taxe svp.' },
    { speaker: 'them', romaji: 'hai, kakunin no tame pasupooto o douzo.', french: 'Oui, votre passeport pour vérification.' },
    { speaker: 'me', romaji: 'kochira ni gozaimasu.', french: 'Le voici.' },
  ] },
  { id: 'sh-d-16', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'yoroshii desu ka?', french: 'Ça vous va ?' },
    { speaker: 'me', romaji: 'hai, sore ni shimasu, fukuro wa irimasen.', french: 'Oui je le prends, pas besoin de sac.' },
    { speaker: 'them', romaji: 'kashikomarimashita, denshi-reshiito demo ii desu ka?', french: 'C\'est noté, reçu électronique ok ?' },
    { speaker: 'me', romaji: 'hai, kanyou wa arimasen.', french: 'Oui, pas de souci.' },
  ] },
  { id: 'sh-d-17', situation: 'shopping', turns: [
    { speaker: 'them', romaji: 'henpin wa nanoka inai de gozaimasu.', french: 'Retour sous 7 jours.' },
    { speaker: 'me', romaji: 'wakarimashita, reshiito wa hitsuyou desu ka?', french: 'D\'accord, le reçu est nécessaire ?' },
    { speaker: 'them', romaji: 'hai, hitsuyou de gozaimasu, taisetsu ni hokan kudasai.', french: 'Oui, gardez-le précieusement.' },
    { speaker: 'me', romaji: 'wakarimashita, ki o tsuke-masu.', french: 'Compris, je ferai attention.' },
  ] },
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
