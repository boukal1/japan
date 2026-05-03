import { Dialog } from '../../models/word.model';

export const DIRECTION_DIALOGS: Dialog[] = [
  { id: 'di-d-01', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'doushimashita ka?', french: 'Que se passe-t-il ?' },
    { speaker: 'me', romaji: 'sumimasen, michi ga wakaranakute komatte imasu.', french: 'Pardon, je suis perdu et embêté.' },
    { speaker: 'them', romaji: 'doko ni ikitai n desu ka?', french: 'Où voulez-vous aller ?' },
    { speaker: 'me', romaji: 'Asakusa-eki ni ikitai n desu ga, oshiete kudasai.', french: 'Je voudrais aller à la gare d\'Asakusa, pouvez-vous me l\'indiquer ?' },
  ] },
  { id: 'di-d-02', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'doko ni ikitai n desu ka?', french: 'Où voulez-vous aller ?' },
    { speaker: 'me', romaji: 'Senso-ji ni ikitai desu, koko kara tooi desu ka?', french: 'Je veux aller au temple Sensō-ji. C\'est loin d\'ici ?' },
    { speaker: 'them', romaji: 'iie, aruite goofun gurai desu yo.', french: 'Non, à pied environ 5 minutes.' },
    { speaker: 'me', romaji: 'aa, chikai desu ne, arigatou gozaimasu!', french: 'Ah c\'est tout près, merci beaucoup !' },
  ] },
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
  { id: 'di-d-05', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'hidari ni magaru to mieru hazu desu yo.', french: 'En tournant à gauche, vous devriez le voir.' },
    { speaker: 'me', romaji: 'hidari desu ne, doori no namae wa nan desu ka?', french: 'À gauche, et le nom de la rue ?' },
    { speaker: 'them', romaji: 'Naka-doori desu, kanban ga oookii desu yo.', french: 'C\'est la rue Naka, le panneau est grand.' },
    { speaker: 'me', romaji: 'wakarimashita, doumo arigatou gozaimasu.', french: 'D\'accord, merci beaucoup.' },
  ] },
  { id: 'di-d-06', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'kado o magatte sugu desu yo.', french: 'Juste après le coin.' },
    { speaker: 'me', romaji: 'kado wa migi desu ka, hidari desu ka?', french: 'Le coin, c\'est à droite ou à gauche ?' },
    { speaker: 'them', romaji: 'migi-gawa no kado desu, akai kanban no tonari.', french: 'Le coin de droite, à côté du panneau rouge.' },
    { speaker: 'me', romaji: 'akai kanban desu ne, sagashite mimasu, arigatou.', french: 'Le panneau rouge, je vais regarder, merci.' },
  ] },
  { id: 'di-d-07', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'tsuki-atari ni arimasu yo.', french: 'C\'est au bout de la rue.' },
    { speaker: 'me', romaji: 'tsuki-atari made aruite nan-pun gurai desu ka?', french: 'Combien de minutes à pied jusqu\'au bout ?' },
    { speaker: 'them', romaji: 'sou desu ne, sanpun gurai de tsukimasu yo.', french: 'Voyons… à peu près 3 minutes.' },
    { speaker: 'me', romaji: 'sanpun nara daijoubu desu, arigatou gozaimasu.', french: '3 minutes c\'est bon, merci.' },
  ] },
  { id: 'di-d-08', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'shingou o futatsu watatte kudasai.', french: 'Traversez deux feux.' },
    { speaker: 'me', romaji: 'shingou o futatsu desu ne, sono ato wa?', french: 'Deux feux, et après ?' },
    { speaker: 'them', romaji: 'mittsume no shingou no temae de migi ni iku to mitsukarimasu.', french: 'Juste avant le 3e feu, tournez à droite, vous le trouverez.' },
    { speaker: 'me', romaji: 'mittsume no temae de migi, oboe-mashita.', french: 'Avant le 3e à droite, c\'est noté.' },
  ] },
  { id: 'di-d-09', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'kono michi o massugu de daijoubu desu.', french: 'Continuez tout droit, ça ira.' },
    { speaker: 'me', romaji: 'massugu desu ne, dochira no gawa ni arimasu ka?', french: 'Tout droit, c\'est de quel côté ?' },
    { speaker: 'them', romaji: 'hidari-gawa desu, midori no tatemono desu.', french: 'Côté gauche, c\'est le bâtiment vert.' },
    { speaker: 'me', romaji: 'midori no tatemono, sagashimasu, arigatou.', french: 'Le bâtiment vert, je vais le repérer, merci.' },
  ] },
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
  { id: 'di-d-12', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'annai-jo wa eki no naka ni arimasu yo.', french: 'L\'office de tourisme est dans la gare.' },
    { speaker: 'me', romaji: 'eki no naka no doko desu ka?', french: 'Où dans la gare exactement ?' },
    { speaker: 'them', romaji: 'higashi-guchi no chikaku desu, kanban ga arimasu.', french: 'Près de la sortie est, il y a un panneau.' },
    { speaker: 'me', romaji: 'higashi-guchi de sagashite mimasu, arigatou gozaimasu.', french: 'Je chercherai près de la sortie est, merci.' },
  ] },
  { id: 'di-d-13', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'wakaranakattara, chikaku no kouban de kiitemite kudasai.', french: 'Si vous ne trouvez pas, demandez au koban le plus proche.' },
    { speaker: 'me', romaji: 'kouban wa kono atari ni arimasu ka?', french: 'Il y a un koban dans le coin ?' },
    { speaker: 'them', romaji: 'hai, kono michi no tsuki-atari ni arimasu.', french: 'Oui, au bout de cette rue.' },
    { speaker: 'me', romaji: 'tsuki-atari desu ne, sou shimasu, arigatou.', french: 'Au bout, je vais y aller, merci.' },
  ] },
  { id: 'di-d-14', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'moyori no eki wa Shibuya desu yo.', french: 'La gare la plus proche est Shibuya.' },
    { speaker: 'me', romaji: 'Shibuya made wa aruite ikemasu ka?', french: 'On peut y aller à pied ?' },
    { speaker: 'them', romaji: 'juugofun gurai kakarimasu kedo, ikemasu yo.', french: 'Ça prend environ 15 minutes mais oui.' },
    { speaker: 'me', romaji: 'juugofun nara daijoubu desu, arigatou gozaimasu.', french: '15 min c\'est bon, merci.' },
  ] },
  { id: 'di-d-15', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'isshou ni ikimashou ka? watashi mo soko ni ikimasu.', french: 'On y va ensemble ? Je vais aussi par là.' },
    { speaker: 'me', romaji: 'hontou desu ka? sumimasen, taihen tasukarimasu.', french: 'C\'est vrai ? Pardon, ça m\'aide beaucoup.' },
    { speaker: 'them', romaji: 'iie, kochira mo onaji houkou desu kara.', french: 'Pas de souci, je vais dans la même direction.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, yoroshiku onegaishimasu.', french: 'Merci beaucoup, je compte sur vous.' },
  ] },
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
  { id: 'di-d-18', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'kono basho desu ka? chizu o misete kudasai.', french: 'C\'est cet endroit ? Montrez la carte svp.' },
    { speaker: 'me', romaji: 'hai, koko ni ikitai n desu, douyatte ikeba ii desu ka?', french: 'Oui c\'est là, comment dois-je faire ?' },
    { speaker: 'them', romaji: 'Yamanote-sen ni notte, Ueno de orite kudasai.', french: 'Prenez la Yamanote et descendez à Ueno.' },
    { speaker: 'me', romaji: 'Yamanote-sen de Ueno desu ne, oboe-mashita.', french: 'Yamanote et Ueno, c\'est noté.' },
  ] },
  { id: 'di-d-19', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'soko desu yo, miete imasu ka?', french: 'C\'est juste là, vous le voyez ?' },
    { speaker: 'me', romaji: 'aa, ano akai tatemono desu ne!', french: 'Ah, le bâtiment rouge là-bas !' },
    { speaker: 'them', romaji: 'sou desu, sou desu, sugu tsukimasu yo.', french: 'C\'est ça, vous y êtes presque.' },
    { speaker: 'me', romaji: 'hontou ni tasukarimashita, arigatou gozaimasu.', french: 'Vraiment, ça m\'a aidé. Merci !' },
  ] },
  { id: 'di-d-20', situation: 'direction', turns: [
    { speaker: 'them', romaji: 'michi ga komi-itte iru kara, kakimashou.', french: 'Le chemin est compliqué, je vais vous le dessiner.' },
    { speaker: 'me', romaji: 'sumimasen, hontou ni arigatou gozaimasu.', french: 'Pardon, vraiment merci.' },
    { speaker: 'them', romaji: 'douzo, kore o motte itte kudasai.', french: 'Tenez, prenez ce papier avec vous.' },
    { speaker: 'me', romaji: 'kore ga areba anshin desu, kansha shimasu.', french: 'Avec ça je suis rassuré, je vous suis reconnaissant.' },
  ] },
];
