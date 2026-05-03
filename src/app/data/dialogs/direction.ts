import { Dialog } from '../../models/word.model';

export const DIRECTION_DIALOGS: Dialog[] = [
  // me first — demande de chemin
  { id: 'di-d-01', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, michi ni mayotte shimaimashita. Asakusa-eki wa doko desu ka?', french: 'Pardon, je suis perdu. Où est la gare d\'Asakusa ?' },
    { speaker: 'them', romaji: 'kono michi o massugu itte, futatsume no shingou o migi ni magatte kudasai.', french: 'Allez tout droit ici, au 2e feu tournez à droite.' },
    { speaker: 'me', romaji: 'massugu de futatsume no shingou, migi desu ne. aruite goofun gurai desu ka?', french: 'Tout droit, 2e feu à droite. Environ 5 minutes à pied ?' },
    { speaker: 'them', romaji: 'hai, goofun gurai de tsukimasu yo.', french: 'Oui, vous y êtes en 5 minutes.' },
  ] },
  { id: 'di-d-02', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, Senso-ji e wa dou ikeba ii desu ka? koko kara tooi desu ka?', french: 'Pardon, comment aller au Sensō-ji ? C\'est loin d\'ici ?' },
    { speaker: 'them', romaji: 'iie, aruite goofun gurai desu yo.', french: 'Non, environ 5 minutes à pied.' },
    { speaker: 'me', romaji: 'dono michi de ikeba ii desu ka?', french: 'Par quelle rue je dois passer ?' },
    { speaker: 'them', romaji: 'kono michi o massugu itte, migi ni magatte kudasai.', french: 'Tout droit ici, puis tournez à droite.' },
  ] },
  // them first
  { id: 'di-d-03', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'kono michi o massugu itte kudasai.', french: 'Allez tout droit dans cette rue.' },
    { speaker: 'me', romaji: 'massugu desu ne, sono ato wa dou sureba ii desu ka?', french: 'Tout droit, et après je fais comment ?' },
    { speaker: 'them', romaji: 'futatsume no shingou o migi ni magatte kudasai.', french: 'Au deuxième feu, tournez à droite.' },
    { speaker: 'me', romaji: 'wakarimashita, totemo tasukarimashita.', french: 'D\'accord, ça m\'aide beaucoup.' },
  ] },
  { id: 'di-d-04', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'tsugi no koushaten o migi ni magatte kudasai.', french: 'Au prochain carrefour, tournez à droite.' },
    { speaker: 'me', romaji: 'koushaten o migi desu ne, sono saki ni miemasu ka?', french: 'À droite au carrefour, c\'est visible ensuite ?' },
    { speaker: 'them', romaji: 'hai, sugu hidari-gawa ni arimasu yo.', french: 'Oui, c\'est tout de suite à gauche.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, ittekimasu.', french: 'Merci, j\'y vais.' },
  ] },
  // me first
  { id: 'di-d-05', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, Naka-doori wa kono atari ni arimasu ka?', french: 'Pardon, la rue Naka est dans le coin ?' },
    { speaker: 'them', romaji: 'hai, hidari ni magaru to miemasu yo.', french: 'Oui, en tournant à gauche vous la verrez.' },
    { speaker: 'me', romaji: 'doori no kanban wa sagashiyasui desu ka?', french: 'Le panneau de la rue est facile à repérer ?' },
    { speaker: 'them', romaji: 'hai, kanban ga oookii desu yo.', french: 'Oui, le panneau est grand.' },
  ] },
  // them first
  { id: 'di-d-06', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'kado o magatte sugu desu yo.', french: 'Juste après le coin.' },
    { speaker: 'me', romaji: 'kado wa migi desu ka, hidari desu ka?', french: 'Le coin, c\'est à droite ou à gauche ?' },
    { speaker: 'them', romaji: 'migi-gawa no kado desu, akai kanban no tonari.', french: 'Le coin de droite, à côté du panneau rouge.' },
    { speaker: 'me', romaji: 'akai kanban desu ne, sagashite mimasu, arigatou.', french: 'Le panneau rouge, je vais regarder, merci.' },
  ] },
  // me first
  { id: 'di-d-07', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, tsuki-atari made aruite nan-pun gurai desu ka?', french: 'Pardon, c\'est à combien de minutes à pied jusqu\'au bout de la rue ?' },
    { speaker: 'them', romaji: 'sou desu ne, sanpun gurai de tsukimasu yo.', french: 'Voyons… à peu près 3 minutes.' },
    { speaker: 'me', romaji: 'sanpun nara daijoubu desu, nani ga arimasu ka soko ni?', french: '3 minutes c\'est bien, qu\'est-ce qu\'il y a au bout ?' },
    { speaker: 'them', romaji: 'ookii okashiya ga arimasu yo.', french: 'Il y a une grande confiserie.' },
  ] },
  // them first
  { id: 'di-d-08', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'shingou o futatsu watatte kudasai.', french: 'Traversez deux feux.' },
    { speaker: 'me', romaji: 'shingou o futatsu desu ne, sono ato wa?', french: 'Deux feux, et après ?' },
    { speaker: 'them', romaji: 'mittsume no shingou no temae de migi ni iku to mitsukarimasu.', french: 'Juste avant le 3e feu, tournez à droite, vous le trouverez.' },
    { speaker: 'me', romaji: 'mittsume no temae de migi, oboe-mashita.', french: 'Avant le 3e à droite, c\'est noté.' },
  ] },
  // me first
  { id: 'di-d-09', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, midori no tatemono wa kono michi no saki desu ka?', french: 'Pardon, le bâtiment vert est plus loin dans cette rue ?' },
    { speaker: 'them', romaji: 'hai, massugu de daijoubu desu, hidari-gawa ni arimasu.', french: 'Oui, continuez tout droit, c\'est sur la gauche.' },
    { speaker: 'me', romaji: 'migi-gawa de wa nai desu ka?', french: 'Pas sur la droite ?' },
    { speaker: 'them', romaji: 'iie, hidari-gawa desu yo.', french: 'Non, c\'est sur la gauche.' },
  ] },
  // them first
  { id: 'di-d-10', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'aruite juppun gurai desu yo.', french: 'Environ 10 min à pied.' },
    { speaker: 'me', romaji: 'juppun nara aruke-masu, michi-jun o oshiete kudasai.', french: '10 min ça va, pouvez-vous m\'indiquer le chemin ?' },
    { speaker: 'them', romaji: 'massugu itte, ginkou no mae de hidari ni magatte kudasai.', french: 'Tout droit, puis à gauche devant la banque.' },
    { speaker: 'me', romaji: 'ginkou no mae de hidari desu ne, wakarimashita.', french: 'À gauche devant la banque, d\'accord.' },
  ] },
  { id: 'di-d-11', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'sukoshi tooi desu kara, takushii ga ii desu yo.', french: 'C\'est un peu loin, prenez plutôt un taxi.' },
    { speaker: 'me', romaji: 'sou desu ka, takushii noriba wa doko desu ka?', french: 'Vraiment ? Où est la station de taxi ?' },
    { speaker: 'them', romaji: 'eki no kita-guchi o deru to sugu desu.', french: 'Juste à la sortie nord de la gare.' },
    { speaker: 'me', romaji: 'kita-guchi desu ne, arigatou gozaimasu.', french: 'Sortie nord, merci.' },
  ] },
  // me first
  { id: 'di-d-12', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, eki no naka ni annai-jo wa arimasu ka?', french: 'Pardon, y a-t-il un office de tourisme dans la gare ?' },
    { speaker: 'them', romaji: 'hai, higashi-guchi no chikaku ni arimasu yo, kanban ga arimasu.', french: 'Oui, près de la sortie est, il y a un panneau.' },
    { speaker: 'me', romaji: 'higashi-guchi wa dochira desu ka?', french: 'La sortie est, c\'est de quel côté ?' },
    { speaker: 'them', romaji: 'kochira no kaidan o kudatte, sugu migi desu.', french: 'Descendez cet escalier, c\'est tout de suite à droite.' },
  ] },
  // them first
  { id: 'di-d-13', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'wakaranakattara, chikaku no kouban de kiitemite kudasai.', french: 'Si vous ne trouvez pas, demandez au koban le plus proche.' },
    { speaker: 'me', romaji: 'kouban wa kono atari ni arimasu ka?', french: 'Il y a un koban dans le coin ?' },
    { speaker: 'them', romaji: 'hai, kono michi no tsuki-atari ni arimasu.', french: 'Oui, au bout de cette rue.' },
    { speaker: 'me', romaji: 'tsuki-atari desu ne, sou shimasu, arigatou.', french: 'Au bout, je vais y aller, merci.' },
  ] },
  // me first
  { id: 'di-d-14', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, moyori no eki wa doko desu ka?', french: 'Pardon, où est la gare la plus proche ?' },
    { speaker: 'them', romaji: 'Shibuya-eki ga ichiban chikai desu, aruite juugofun gurai desu.', french: 'C\'est Shibuya, environ 15 minutes à pied.' },
    { speaker: 'me', romaji: 'juugofun nara daijoubu desu, dou ikeba ii desu ka?', french: '15 min ça va, par où je passe ?' },
    { speaker: 'them', romaji: 'massugu itte, ginkou no kado o hidari desu.', french: 'Tout droit, puis à gauche au coin de la banque.' },
  ] },
  // me first
  { id: 'di-d-15', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, Akihabara made no michi ga wakaranakute...', french: 'Pardon, je ne sais plus comment aller à Akihabara...' },
    { speaker: 'them', romaji: 'isshou ni ikimashou ka, watashi mo onaji houkou desu.', french: 'On y va ensemble ? Je vais dans la même direction.' },
    { speaker: 'me', romaji: 'hontou desu ka, taihen tasukarimasu!', french: 'C\'est vrai ? Vous me sauvez !' },
    { speaker: 'them', romaji: 'iie, kochira mo onaji houkou desu kara.', french: 'Pas de souci, je vais de toute façon dans la même direction.' },
  ] },
  // them first
  { id: 'di-d-16', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'chizu o misete kudasai, oshiete agemasu.', french: 'Montrez-moi la carte, je vais vous expliquer.' },
    { speaker: 'me', romaji: 'kore desu, koko ni ikitai n desu.', french: 'La voici, je veux aller ici.' },
    { speaker: 'them', romaji: 'aa, koko desu ne, kantan desu yo.', french: 'Ah, ici, c\'est facile.' },
    { speaker: 'me', romaji: 'oshiete itadaite arigatou gozaimasu.', french: 'Merci de me l\'expliquer.' },
  ] },
  { id: 'di-d-17', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'hashi o watatte sugu hidari ni magatte kudasai.', french: 'Traversez le pont et tournez tout de suite à gauche.' },
    { speaker: 'me', romaji: 'hashi o watatte hidari desu ne, sou suru to nani ga miemasu ka?', french: 'Pont puis gauche, et qu\'est-ce que je vois alors ?' },
    { speaker: 'them', romaji: 'shiroi tatemono ga miemasu, sore desu.', french: 'Vous verrez un bâtiment blanc, c\'est lui.' },
    { speaker: 'me', romaji: 'shiroi tatemono desu ne, wakari-yasui desu, arigatou.', french: 'Le bâtiment blanc, c\'est clair, merci.' },
  ] },
  // me first
  { id: 'di-d-18', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono chizu de ima doko ni iru ka oshiete itadakemasu ka?', french: 'Pardon, pouvez-vous me montrer où je suis sur ce plan ?' },
    { speaker: 'them', romaji: 'aa, koko desu yo. Yamanote-sen ni notte, Ueno de orite kudasai.', french: 'Ah, vous êtes ici. Prenez la Yamanote et descendez à Ueno.' },
    { speaker: 'me', romaji: 'Yamanote-sen wa nan-ban-sen kara norimasu ka?', french: 'La Yamanote, je la prends sur quelle voie ?' },
    { speaker: 'them', romaji: 'san-ban-sen kara notte kudasai.', french: 'Voie 3.' },
  ] },
  { id: 'di-d-19', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'soko desu yo, miete imasu ka?', french: 'C\'est juste là, vous le voyez ?' },
    { speaker: 'me', romaji: 'aa, ano akai tatemono desu ne!', french: 'Ah, le bâtiment rouge là-bas !' },
    { speaker: 'them', romaji: 'sou desu, sou desu, sugu tsukimasu yo.', french: 'C\'est ça, vous y êtes presque.' },
    { speaker: 'me', romaji: 'hontou ni tasukarimashita, arigatou gozaimasu.', french: 'Vraiment, ça m\'a aidé. Merci !' },
  ] },
  // me first
  { id: 'di-d-20', situation: 'direction', turns: [
    { speaker: 'me', romaji: 'sumimasen, Senso-ji made no michi ga fukuzatsu de mayotte shimaimashita.', french: 'Pardon, je me suis perdu sur le chemin du Sensō-ji, c\'est complexe.' },
    { speaker: 'them', romaji: 'michi ga komi-itte iru kara, kakimashoo, douzo.', french: 'Le chemin est compliqué, je vais vous le dessiner, tenez.' },
    { speaker: 'me', romaji: 'sumimasen, hontou ni arigatou gozaimasu.', french: 'Merci vraiment, je suis touché.' },
    { speaker: 'them', romaji: 'douzo, kore o motte itte kudasai, anshin desu.', french: 'Prenez ce papier, vous serez rassuré.' },
  ] },
];
