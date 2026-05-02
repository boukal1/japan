import { Phrase } from '../models/word.model';

export const PHRASES: Phrase[] = [
  { id: 'sd-p-01', situation: 'salutations-demandes', romaji: 'konnichiwa, hajimemashite.', french: 'Bonjour, enchanté(e).' },
  { id: 'sd-p-02', situation: 'salutations-demandes', romaji: 'ohayou gozaimasu!', french: 'Bonjour ! (matin, poli)' },
  { id: 'sd-p-03', situation: 'salutations-demandes', romaji: 'konbanwa, otsukaresama desu.', french: 'Bonsoir, bon travail.' },
  { id: 'sd-p-04', situation: 'salutations-demandes', romaji: 'sayounara, mata ashita.', french: 'Au revoir, à demain.' },
  { id: 'sd-p-05', situation: 'salutations-demandes', romaji: 'oyasuminasai.', french: 'Bonne nuit.' },
  { id: 'sd-p-06', situation: 'salutations-demandes', romaji: 'arigatou gozaimashita.', french: 'Merci beaucoup (pour ce qui a été fait).' },
  { id: 'sd-p-07', situation: 'salutations-demandes', romaji: 'doumo arigatou.', french: 'Merci beaucoup (informel).' },
  { id: 'sd-p-08', situation: 'salutations-demandes', romaji: 'doitashimashite.', french: 'De rien.' },
  { id: 'sd-p-09', situation: 'salutations-demandes', romaji: 'sumimasen, chotto ii desu ka?', french: 'Excusez-moi, vous avez un instant ?' },
  { id: 'sd-p-10', situation: 'salutations-demandes', romaji: 'sumimasen, eki wa doko desu ka?', french: 'Excusez-moi, où est la gare ?' },
  { id: 'sd-p-11', situation: 'salutations-demandes', romaji: 'gomennasai, okuremashita.', french: 'Désolé(e), je suis en retard.' },
  { id: 'sd-p-12', situation: 'salutations-demandes', romaji: 'moushiwake arimasen.', french: 'Toutes mes excuses (très poli).' },
  { id: 'sd-p-13', situation: 'salutations-demandes', romaji: 'tasukete kudasai!', french: 'Aidez-moi s\'il vous plaît !' },
  { id: 'sd-p-14', situation: 'salutations-demandes', romaji: 'chotto tetsudatte kuremasen ka?', french: 'Pourriez-vous m\'aider un instant ?' },
  { id: 'sd-p-15', situation: 'salutations-demandes', romaji: 'eigo o hanasemasu ka?', french: 'Parlez-vous anglais ?' },
  { id: 'sd-p-16', situation: 'salutations-demandes', romaji: 'nihongo ga sukoshi wakarimasu.', french: 'Je comprends un peu le japonais.' },
  { id: 'sd-p-17', situation: 'salutations-demandes', romaji: 'mou ichido onegaishimasu.', french: 'Encore une fois s\'il vous plaît.' },
  { id: 'sd-p-18', situation: 'salutations-demandes', romaji: 'yukkuri hanashite kudasai.', french: 'Parlez plus lentement s\'il vous plaît.' },
  { id: 'sd-p-19', situation: 'salutations-demandes', romaji: 'kore wa nihongo de nan desu ka?', french: 'Comment dit-on ceci en japonais ?' },
  { id: 'sd-p-20', situation: 'salutations-demandes', romaji: 'kore wa nan desu ka?', french: 'Qu\'est-ce que c\'est ?' },
  { id: 'sd-p-21', situation: 'salutations-demandes', romaji: 'wakarimasen, sumimasen.', french: 'Je ne comprends pas, désolé.' },
  { id: 'sd-p-22', situation: 'salutations-demandes', romaji: 'kore o kudasai.', french: 'Donnez-moi ceci s\'il vous plaît.' },
  { id: 'sd-p-23', situation: 'salutations-demandes', romaji: 'ikura desu ka?', french: 'Combien ça coûte ?' },
  { id: 'sd-p-24', situation: 'salutations-demandes', romaji: 'toire wa doko desu ka?', french: 'Où sont les toilettes ?' },
  { id: 'sd-p-25', situation: 'salutations-demandes', romaji: 'onamae wa nan desu ka?', french: 'Comment vous appelez-vous ?' },
  { id: 'sd-p-26', situation: 'salutations-demandes', romaji: 'watashi no namae wa Pierre desu.', french: 'Je m\'appelle Pierre.' },
  { id: 'sd-p-27', situation: 'salutations-demandes', romaji: 'yoroshiku onegaishimasu.', french: 'Enchanté / merci d\'avance.' },
  { id: 'sd-p-28', situation: 'salutations-demandes', romaji: 'ki o tsukete kudasai.', french: 'Faites attention / prenez soin de vous.' },
  { id: 'sd-p-29', situation: 'salutations-demandes', romaji: 'ogenki desu ka?', french: 'Comment allez-vous ?' },
  { id: 'sd-p-30', situation: 'salutations-demandes', romaji: 'okagesama de, genki desu.', french: 'Grâce à vous, je vais bien.' },

  // === Au restaurant (30) ===
  // Réserver (5)
  { id: 're-p-01', situation: 'restaurant', romaji: 'yoyaku o onegaishimasu.', french: 'Je voudrais faire une réservation.' },
  { id: 're-p-02', situation: 'restaurant', romaji: 'konban shichi-ji ni futari desu.', french: 'Ce soir à 19h pour deux personnes.' },
  { id: 're-p-03', situation: 'restaurant', romaji: 'mado-gawa no seki wa arimasu ka?', french: 'Avez-vous une place côté fenêtre ?' },
  { id: 're-p-04', situation: 'restaurant', romaji: 'yoyaku o henkou shitai desu.', french: 'Je voudrais modifier ma réservation.' },
  { id: 're-p-05', situation: 'restaurant', romaji: 'yoyaku o kyanseru shitai desu.', french: 'Je voudrais annuler ma réservation.' },

  // À l'arrivée (3)
  { id: 're-p-06', situation: 'restaurant', romaji: 'ohitorisama desu ka?', french: 'C\'est pour une personne ?' },
  { id: 're-p-07', situation: 'restaurant', romaji: 'ninzuu wa futari desu.', french: 'Nous sommes deux.' },
  { id: 're-p-08', situation: 'restaurant', romaji: 'yoyaku shiteimasu, namae wa Pierre desu.', french: 'J\'ai réservé au nom de Pierre.' },

  // Demander conseil (5)
  { id: 're-p-09', situation: 'restaurant', romaji: 'osusume wa nan desu ka?', french: 'Quelle est votre recommandation ?' },
  { id: 're-p-10', situation: 'restaurant', romaji: 'kono mise no meibutsu wa nan desu ka?', french: 'Quelle est la spécialité du restaurant ?' },
  { id: 're-p-11', situation: 'restaurant', romaji: 'nani ga ichiban ninki desu ka?', french: 'Qu\'est-ce qui est le plus populaire ?' },
  { id: 're-p-12', situation: 'restaurant', romaji: 'shefu no osusume wa arimasu ka?', french: 'Y a-t-il une suggestion du chef ?' },
  { id: 're-p-13', situation: 'restaurant', romaji: 'chiiki no tokusan-ryouri ga tabetai desu.', french: 'Je voudrais goûter une spécialité régionale.' },

  // Commander (8)
  { id: 're-p-14', situation: 'restaurant', romaji: 'menyuu o misete kudasai.', french: 'Montrez-moi le menu svp.' },
  { id: 're-p-15', situation: 'restaurant', romaji: 'eigo no menyuu wa arimasu ka?', french: 'Avez-vous un menu en anglais ?' },
  { id: 're-p-16', situation: 'restaurant', romaji: 'kore o kudasai.', french: 'Je prends ceci svp.' },
  { id: 're-p-17', situation: 'restaurant', romaji: 'chuumon o onegaishimasu.', french: 'Je voudrais commander svp.' },
  { id: 're-p-18', situation: 'restaurant', romaji: 'kore wa nan desu ka?', french: 'Qu\'est-ce que c\'est ?' },
  { id: 're-p-19', situation: 'restaurant', romaji: 'niku wa tabemasen, bejitarian desu.', french: 'Je ne mange pas de viande, je suis végétarien.' },
  { id: 're-p-20', situation: 'restaurant', romaji: 'arerugii ga arimasu, kani ga taberaremasen.', french: 'J\'ai une allergie, je ne peux pas manger de crabe.' },
  { id: 're-p-21', situation: 'restaurant', romaji: 'atsui ocha o ippai onegaishimasu.', french: 'Un thé chaud svp.' },

  // Pendant le repas (4)
  { id: 're-p-22', situation: 'restaurant', romaji: 'totemo oishii desu!', french: 'C\'est très bon !' },
  { id: 're-p-23', situation: 'restaurant', romaji: 'mou sukoshi mizu o kudasai.', french: 'Encore un peu d\'eau svp.' },
  { id: 're-p-24', situation: 'restaurant', romaji: 'kanpai!', french: 'Santé !' },
  { id: 're-p-25', situation: 'restaurant', romaji: 'gochisousama deshita.', french: 'Merci pour le repas (en partant).' },

  // Payer (5)
  { id: 're-p-26', situation: 'restaurant', romaji: 'okanjou o onegaishimasu.', french: 'L\'addition svp.' },
  { id: 're-p-27', situation: 'restaurant', romaji: 'kaado de haraemasu ka?', french: 'Puis-je payer par carte ?' },
  { id: 're-p-28', situation: 'restaurant', romaji: 'genkin de haraimasu.', french: 'Je paie en espèces.' },
  { id: 're-p-29', situation: 'restaurant', romaji: 'reshiito o kudasai.', french: 'Un reçu svp.' },
  { id: 're-p-30', situation: 'restaurant', romaji: 'betsubetsu ni onegaishimasu.', french: 'Séparément svp (chacun paie sa part).' },
];
