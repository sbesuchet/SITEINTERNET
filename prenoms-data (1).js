// prenoms-data.js
// Contenu des fiches prénoms pour l'onglet "Prénoms" de sylviabesuchet.fr
// Accès libre — pas d'email requis. Ton hypothétique, sans jargon, sans
// référence à un ouvrage ou une méthode nommée.
//
// Structure de chaque entrée :
//   prenom      : affichage
//   etymologie  : origine + une image concrète
//   piste       : résonance symbolique + une piste de mémoire familiale,
//                 toujours au conditionnel, jamais affirmative

const PRENOMS_DATA = [

  { prenom:"Alice", etymologie:"Du germanique adal, « noble », par l'ancien français Aalis. L'image qui s'en dégage est celle d'une élévation tranquille, sans besoin de se montrer.", piste:"Ce prénom porte souvent une exigence discrète de dignité. Il arrive que les Alice portent, sans le savoir, le souci de bien faire pour toute une lignée — peut-être en écho à une aïeule qui a dû prouver sa valeur dans des circonstances difficiles." },

  { prenom:"Adrien", etymologie:"Du latin Hadrianus, « originaire d'Adria », ville portuaire italienne. L'eau et le passage sont inscrits dans ce nom dès l'origine.", piste:"Les Adrien portent parfois une mémoire de traversée ou de déplacement — un ancêtre qui a dû partir, changer de région ou de vie. Une question à se poser : y a-t-il, dans votre famille, une histoire de départ resté sans retour ?" },

  { prenom:"Amandine", etymologie:"Dérivé du latin amandus, « qui doit être aimé ». C'est un prénom bâti tout entier autour de l'amour à recevoir, plus qu'à donner.", piste:"Il arrive que ce prénom vienne combler un manque affectif ressenti par les parents eux-mêmes au moment de la naissance. Peut-être portez-vous, sans l'avoir choisi, la mission discrète de rassurer ceux qui vous entourent sur le fait qu'ils sont aimables." },

  { prenom:"Antoine", etymologie:"Du latin Antonius, nom d'une grande famille romaine dont le sens exact reste incertain, mais qui a longtemps évoqué la valeur et l'engagement.", piste:"Les Antoine héritent parfois d'une position d'aîné symbolique, même sans l'être dans la fratrie : celui qui protège, qui tranche, qui prend la responsabilité. Cela résonne-t-il avec une place que vous occupez sans l'avoir demandée ?" },

  { prenom:"Aurélie", etymologie:"Du latin aureus, « doré ». L'image est celle de la lumière du matin, de ce qui brille sans éblouir.", piste:"Ce prénom porte souvent une attente de rayonnement discret plutôt que spectaculaire. Peut-être portez-vous le rôle de celle qui éclaire les situations difficiles dans votre famille, sans jamais être au centre." },

  { prenom:"Axel", etymologie:"Forme scandinave d'Absalon, de l'hébreu « père de paix ». Un nom construit sur l'idée de réconciliation.", piste:"Il arrive que les Axel héritent d'une mission de pacification familiale — celui qui apaise les tensions, qui recolle ce qui se déchire entre deux générations. Y a-t-il eu, avant vous, un conflit resté sans résolution ?" },

  { prenom:"Benjamin", etymologie:"De l'hébreu binyamin, « fils de la droite » ou « fils du sud ». Dans la Genèse, c'est le dernier fils de Jacob, celui né dans la douleur de la perte de sa mère.", piste:"Les Benjamin portent parfois, même sans être le petit dernier, une histoire liée à une naissance marquée par un deuil ou une inquiétude. Peut-être avez-vous hérité d'une vigilance particulière envers ceux qui vous entourent." },

  { prenom:"Béatrice", etymologie:"Du latin beatrix, « qui rend heureux ». Un prénom tout entier tourné vers le bonheur qu'on apporte aux autres plutôt que celui qu'on reçoit.", piste:"Il arrive que ce prénom porte la charge discrète d'être la source de joie familiale, quitte à mettre de côté ses propres besoins. Cela vous parle-t-il ?" },

  { prenom:"Bastien", etymologie:"Diminutif de Sébastien, du grec sebastos, « vénérable, digne de respect ». L'image est celle d'une force tranquille, éprouvée.", piste:"Les Bastien portent parfois une mémoire de résistance — une capacité à tenir debout après une épreuve, transmise sans mot dire. Peut-être y a-t-il, dans votre lignée, quelqu'un qui a dû faire preuve d'une endurance particulière." },

  { prenom:"Camille", etymologie:"Du latin camillus, désignant un enfant assistant les prêtres lors des cérémonies antiques — un nom lié au service et à la pureté du geste.", piste:"Ce prénom, porté aussi bien par des filles que des garçons, évoque parfois une histoire d'identité à affirmer, ou de rôle à définir soi-même plutôt qu'à recevoir tout fait. Est-ce que cela résonne avec un besoin d'affirmation dans votre histoire ?" },

  { prenom:"Charlotte", etymologie:"Forme féminine de Charles, du germanique karl, « homme libre ». Une racine qui parle moins de douceur que d'indépendance.", piste:"Il arrive que les Charlotte héritent d'un besoin de liberté plus affirmé que ce que leur entourage attend d'elles. Peut-être y a-t-il eu, avant vous, une femme dont l'indépendance a dérangé." },

  { prenom:"Clément", etymologie:"Du latin clemens, « doux, indulgent ». Un prénom construit autour du pardon plutôt que du jugement.", piste:"Les Clément portent parfois la mission de pardonner ce qui, dans la famille, n'a jamais été réglé. Peut-être portez-vous, sans le savoir, le rôle de celui qui referme les vieilles blessures." },

  { prenom:"Chloé", etymologie:"Du grec khloé, « jeune pousse verte ». L'image est celle du printemps, de ce qui commence à peine.", piste:"Ce prénom évoque souvent un nouveau départ voulu par les parents — une envie de renouveau après une période difficile. Y a-t-il eu, autour de votre naissance, un besoin de tourner une page ?" },

  { prenom:"Corentin", etymologie:"D'origine bretonne, souvent rattaché à korr, « nain » ou à un radical signifiant « ami, proche ». Un prénom ancré dans une terre précise, la Bretagne.", piste:"Les Corentin portent parfois un lien fort à un territoire, une maison, une région — un besoin de racines même loin de là où ils vivent. Cela vous évoque-t-il quelque chose ?" },

  { prenom:"David", etymologie:"De l'hébreu david, « bien-aimé ». Dans la Bible, c'est le jeune berger qui terrasse Goliath — le petit qui l'emporte sur le grand.", piste:"Il arrive que les David portent une histoire de combat inégal gagné malgré tout, ou à l'inverse une attente immense à porter seul. Peut-être y a-t-il, dans votre famille, quelqu'un qui a dû affronter bien plus grand que lui." },

  { prenom:"Diane", etymologie:"Du latin Diana, déesse romaine de la chasse et de la lune, protectrice farouche de son indépendance.", piste:"Ce prénom porte souvent une exigence de liberté et de maîtrise de soi. Il arrive que les Diane refusent instinctivement toute forme d'emprise — peut-être en écho à une femme, avant elles, qui n'a pas pu choisir sa vie." },

  { prenom:"Dorian", etymologie:"Popularisé par le personnage de Oscar Wilde, rattaché au grec dorios, évoquant un peuple de la Grèce antique connu pour sa rigueur.", piste:"Les Dorian portent parfois une tension entre l'image qu'on leur demande de renvoyer et ce qu'ils ressentent vraiment à l'intérieur. Est-ce que cela vous parle ?" },

  { prenom:"Delphine", etymologie:"Du latin delphinus, « dauphin », animal associé dans l'Antiquité à la bienveillance et au sauvetage en mer.", piste:"Il arrive que ce prénom porte une mission de sauvetage familial — celle qui vient en aide, qui ramène les autres à bon port. Peut-être occupez-vous ce rôle sans l'avoir choisi." },

  { prenom:"Emma", etymologie:"Du germanique ermen, « universel, entier ». Un prénom court, mais qui porte l'idée de totalité.", piste:"Les Emma portent parfois une attente d'être « tout » pour leur famille — irremplaçable, essentielle. Cela peut être une force, ou un poids. Comment le vivez-vous ?" },

  { prenom:"Éric", etymologie:"Du vieux norrois ei-ríkr, « toujours puissant » ou « seul souverain ». Un prénom scandinave porteur d'une autorité solitaire.", piste:"Il arrive que les Éric héritent d'une posture de chef isolé, celui qui décide seul parce que personne d'autre ne l'a fait avant lui. Y a-t-il, dans votre histoire, une figure d'autorité restée seule à porter les décisions ?" },

  { prenom:"Émilie", etymologie:"Du latin aemulus, « qui cherche à égaler, à rivaliser ». Un prénom construit sur le dépassement de soi.", piste:"Ce prénom porte parfois une comparaison implicite avec quelqu'un d'autre dans la famille — un frère, une sœur, un parent qu'il faudrait égaler. Est-ce que cette dynamique vous est familière ?" },

  { prenom:"Étienne", etymologie:"Du grec stephanos, « couronne ». Étienne est aussi le premier martyr chrétien, lapidé pour sa foi.", piste:"Les Étienne portent parfois une histoire de conviction payée cher, ou à l'inverse une timidité à défendre ce en quoi ils croient. Peut-être y a-t-il, avant vous, quelqu'un qui a souffert pour être resté fidèle à ses idées." },

  { prenom:"Fabien", etymologie:"Du latin faba, « fève ». Un nom romain agricole, lié à la terre nourricière plutôt qu'à un exploit.", piste:"Il arrive que les Fabien portent un attachement discret à la simplicité, à ce qui nourrit sans éclat. Peut-être fuyez-vous, sans trop savoir pourquoi, tout ce qui est ostentatoire." },

  { prenom:"Florence", etymologie:"Du latin florens, « fleurissant, en pleine floraison ». Un prénom porté par l'idée d'épanouissement.", piste:"Ce prénom porte parfois une attente d'épanouissement qui n'a pas pu se réaliser à une génération précédente. Peut-être portez-vous, sans le savoir, le désir inaccompli d'une aïeule." },

  { prenom:"Félix", etymologie:"Du latin felix, « heureux, chanceux ». Un des rares prénoms qui promettent directement le bonheur dans leur sens même.", piste:"Il arrive que les Félix portent une attente immense d'être « la chance » de la famille, celui qui doit réussir là où d'autres ont échoué. Cela résonne-t-il avec vous ?" },

  { prenom:"Fanny", etymologie:"Diminutif de Françoise ou Stéphanie selon les régions, popularisé au XIXe siècle comme prénom autonome.", piste:"Les Fanny portent parfois une identité construite en creux, comme un diminutif d'autre chose — un besoin d'affirmer que ce prénom court porte une personne entière. Est-ce que cela vous parle ?" },

  { prenom:"Gabriel", etymologie:"De l'hébreu gavar, « force » et El, « Dieu » : « Dieu est ma force ». Dans les trois grandes traditions religieuses, Gabriel est le messager des annonces importantes.", piste:"Il arrive que les Gabriel portent le rôle de celui qui annonce, qui dit tout haut ce que personne n'ose formuler dans la famille. Peut-être êtes-vous celui ou celle par qui les vérités difficiles finissent par se dire." },

  { prenom:"Gaëlle", etymologie:"Féminin de Gaël, du breton gwoedel, désignant les peuples gaéliques — un ancrage celtique fort.", piste:"Ce prénom porte souvent un lien profond à une origine géographique ou culturelle précise, parfois oubliée par les générations suivantes. Y a-t-il, dans votre famille, une région dont on ne parle plus mais qui reste présente ?" },

  { prenom:"Guillaume", etymologie:"Du germanique wil, « volonté » et helm, « protection » : « celui qui protège par sa volonté ».", piste:"Les Guillaume portent parfois une charge de protection familiale imposée tôt — celui qui veille, qui tient bon pour que les autres n'aient pas à s'inquiéter. Cela vous évoque-t-il un rôle que vous occupez ?" },

  { prenom:"Gisèle", etymologie:"Du germanique gisil, « flèche, otage ». Dans les traditions anciennes, l'otage servait souvent à sceller une alliance entre deux familles.", piste:"Il arrive que ce prénom porte une mémoire d'alliance ou de réconciliation entre deux lignées, parfois scellée par un mariage ou une naissance stratégique. Cela résonne-t-il avec une histoire de votre famille ?" },

  { prenom:"Hugo", etymologie:"Du germanique hug, « intelligence, esprit ». Un prénom qui place la pensée avant la force.", piste:"Les Hugo portent parfois l'attente d'être celui qui comprend, qui trouve la solution avant les autres. Peut-être portez-vous, dans votre famille, le rôle de celui qu'on consulte." },

  { prenom:"Hélène", etymologie:"Du grec helenê, souvent rattaché à hélê, « éclat, lumière ». Hélène de Troie, dans la mythologie, est celle dont la beauté a déclenché une guerre.", piste:"Ce prénom porte parfois le poids d'une beauté ou d'une présence qui dérange plus qu'elle ne rassure. Peut-être avez-vous ressenti que votre simple présence pouvait provoquer des tensions que vous n'aviez pas cherchées." },

  { prenom:"Henri", etymologie:"Du germanique haim, « maison » et ric, « puissant » : « maître du foyer ».", piste:"Il arrive que les Henri héritent d'une responsabilité de gardien du foyer familial, au sens propre comme au figuré — celui qui tient la maison, la mémoire, les traditions. Est-ce un rôle que vous reconnaissez ?" },

  { prenom:"Hortense", etymologie:"Du latin hortus, « jardin ». Un prénom lié à la culture patiente de ce qui pousse et fleurit lentement.", piste:"Les Hortense portent parfois une patience particulière, un rapport au temps long, à ce qui se construit sans précipitation. Peut-être portez-vous cette qualité en héritage d'une aïeule qui a dû attendre longtemps ce qu'elle désirait." },

  { prenom:"Isabelle", etymologie:"Variante d'Élisabeth, de l'hébreu « Dieu est mon serment ». Un prénom construit sur la promesse tenue.", piste:"Il arrive que les Isabelle portent une exigence de loyauté et de parole donnée, parfois jusqu'à se sacrifier pour ne jamais trahir un engagement. Cela vous ressemble-t-il ?" },

  { prenom:"Ismaël", etymologie:"De l'hébreu « Dieu entend ». Dans la Genèse, Ismaël est le fils écarté d'Abraham, envoyé au désert avec sa mère Agar.", piste:"Ce prénom porte parfois une mémoire de mise à l'écart ou d'exil, réel ou symbolique. Y a-t-il, dans votre famille, une branche qui a été éloignée ou oubliée ?" },

  { prenom:"Inès", etymologie:"Variante espagnole d'Agnès, du grec hagnos, « pur, chaste ». Un prénom porteur d'une exigence de pureté.", piste:"Les Inès portent parfois un besoin de rester intègres, quitte à se couper de situations ou de personnes jugées trop troubles. Est-ce une tendance que vous reconnaissez chez vous ?" },

  { prenom:"Julien", etymologie:"Du latin Julius, nom d'une grande famille romaine dont le sens serait lié à Jupiter, le père des dieux.", piste:"Il arrive que les Julien portent une filiation particulièrement marquée à la figure paternelle, en bien comme en manque. Peut-être portez-vous une question non résolue autour de votre père ou d'une figure paternelle." },

  { prenom:"Jeanne", etymologie:"Féminin de Jean, de l'hébreu « Dieu fait grâce ». Jeanne d'Arc en est la figure la plus marquante : une jeune fille qui prend les armes pour une cause plus grande qu'elle.", piste:"Ce prénom porte souvent une force de conviction et un courage qui dépasse l'âge ou la place qu'on attendait. Peut-être avez-vous dû, jeune, porter une responsabilité plus grande que vous." },

  { prenom:"Jérôme", etymologie:"Du grec hieros, « sacré » et onoma, « nom » : « nom sacré ». Un prénom qui porte l'idée d'une mission à accomplir.", piste:"Les Jérôme portent parfois le sentiment d'avoir une mission précise à remplir dans leur famille, sans toujours savoir laquelle. Est-ce que cela vous parle ?" },

  { prenom:"Justine", etymologie:"Du latin justus, « juste, équitable ». Un prénom construit autour de l'idée de justice.", piste:"Il arrive que les Justine portent une sensibilité aiguë à l'injustice, en particulier celle vécue par un proche. Y a-t-il, dans votre famille, une injustice restée sans réparation ?" },

  { prenom:"Kevin", etymologie:"De l'irlandais Caoimhín, « beau, aimable ». Popularisé au XXe siècle, notamment par la figure de saint Kevin, ermite irlandais.", piste:"Ce prénom porte parfois un désir des parents d'ouvrir une nouvelle page, en dehors des prénoms traditionnels de la famille. Peut-être portez-vous, sans le savoir, l'envie d'un ailleurs que vos parents n'ont pas pu vivre." },

  { prenom:"Karine", etymologie:"Variante de Catherine ou Karen, du grec katharos, « pur ». Un prénom qui insiste sur la clarté et l'honnêteté.", piste:"Il arrive que les Karine portent un besoin de transparence totale, une difficulté à supporter le non-dit. Est-ce que le secret ou le flou vous est particulièrement pénible ?" },

  { prenom:"Louis", etymologie:"Du germanique hlod, « gloire » et wig, « combat » : « glorieux au combat ». Porté par de nombreux rois de France.", piste:"Les Louis héritent parfois d'une attente de réussite ou de reconnaissance sociale marquée, comme s'il fallait porter un nom déjà grand. Cela résonne-t-il avec une pression que vous ressentez ?" },

  { prenom:"Laura", etymologie:"Du latin laurus, « laurier », symbole antique de victoire et de gloire poétique.", piste:"Ce prénom porte parfois une attente de réussite discrète mais réelle, dans un domaine créatif ou intellectuel. Peut-être portez-vous un talent que personne, avant vous, n'a pu exprimer pleinement." },

  { prenom:"Lucas", etymologie:"Du latin lux, « lumière ». Lucas est aussi l'évangéliste associé à la douceur et à la compassion dans la tradition chrétienne.", piste:"Il arrive que les Lucas portent le rôle de celui qui apaise, qui apporte de la clarté dans les situations confuses de la famille. Est-ce un rôle que vous reconnaissez ?" },

  { prenom:"Léa", etymologie:"De l'hébreu lea, souvent rattaché à « lassitude » ou à « vache sauvage » selon les interprétations. Dans la Genèse, Léa est l'épouse non désirée de Jacob, préférée à sa sœur Rachel.", piste:"Ce prénom porte parfois une mémoire de second choix, de comparaison avec une autre femme de la famille. Peut-être avez-vous ressenti, à un moment, de ne pas être celle qu'on attendait." },

  { prenom:"Loïc", etymologie:"Forme bretonne de Louis, portant la même racine germanique liée à la gloire par le combat.", piste:"Les Loïc portent souvent, comme les Louis, un attachement fort à un territoire précis — la Bretagne en particulier — et à ce qu'il représente de fierté et d'appartenance." },

  { prenom:"Marie", etymologie:"De l'hébreu Myriam, dont le sens exact reste débattu (« aimée », « rebelle » ou « étoile de la mer » selon les traditions). Le prénom le plus donné dans l'histoire chrétienne occidentale.", piste:"Ce prénom porte souvent une attente d'exemplarité presque impossible à tenir — être irréprochable, sacrifiée, aimante en toute circonstance. Est-ce une pression que vous reconnaissez ?" },

  { prenom:"Mathieu", etymologie:"De l'hébreu « don de Dieu ». Mathieu était collecteur d'impôts avant de devenir évangéliste — un homme qui change radicalement de vie.", piste:"Il arrive que les Mathieu portent une histoire de transformation profonde, un changement de direction complet à un moment de leur vie ou de celle d'un ancêtre. Cela vous parle-t-il ?" },

  { prenom:"Manon", etymologie:"Diminutif provençal de Marie. Un prénom qui garde la douceur de Marie mais dans une forme plus légère, plus enfantine.", piste:"Ce prénom porte parfois le désir des parents d'alléger un héritage familial lourd, de garder l'essentiel sans le poids. Peut-être portez-vous une version allégée d'une histoire plus grave qui a précédé votre naissance." },

  { prenom:"Maxime", etymologie:"Du latin maximus, « le plus grand ». Un prénom qui porte en lui-même l'idée de dépassement absolu.", piste:"Les Maxime portent parfois une pression de performance, l'idée qu'il faut toujours être le meilleur. Est-ce une exigence que vous ressentez, venant peut-être d'un parent qui n'a pas pu atteindre ce qu'il visait ?" },

  { prenom:"Mélanie", etymologie:"Du grec melas, « noir, sombre ». Un prénom qui, contrairement à son sens littéral, a longtemps évoqué la beauté mystérieuse plutôt que l'obscurité.", piste:"Il arrive que ce prénom porte une part cachée, quelque chose que la famille préfère ne pas éclairer. Y a-t-il, dans votre histoire, un sujet qu'on n'aborde jamais directement ?" },

  { prenom:"Nathan", etymologie:"De l'hébreu « il a donné ». Dans la Bible, Nathan est le prophète qui ose dire au roi David une vérité que personne d'autre n'osait formuler.", piste:"Les Nathan portent parfois le rôle de celui qui dit la vérité, même quand elle dérange les figures d'autorité de la famille. Est-ce un trait que vous reconnaissez ?" },

  { prenom:"Nadia", etymologie:"Du slave nadia, « espoir ». Un prénom entièrement tourné vers l'avenir et la promesse d'un mieux.", piste:"Ce prénom porte souvent l'espoir explicite des parents à un moment particulier de leur vie. Peut-être êtes-vous née à un moment où votre famille avait particulièrement besoin de croire en l'avenir." },

  { prenom:"Noé", etymologie:"De l'hébreu « repos, consolation ». Dans la Genèse, Noé est celui qui sauve sa famille et le vivant à travers le déluge.", piste:"Il arrive que les Noé portent une mission de préservation familiale — celui qui garde ce qui compte vraiment quand tout semble s'effondrer autour. Cela résonne-t-il avec votre place dans la famille ?" },

  { prenom:"Nicolas", etymologie:"Du grec nikê, « victoire » et laos, « peuple » : « victoire du peuple ». Saint Nicolas est associé à la générosité envers les enfants.", piste:"Les Nicolas portent parfois une attente de générosité et de protection envers les plus jeunes ou les plus fragiles de la famille. Est-ce un rôle que vous occupez naturellement ?" },

  { prenom:"Olivier", etymologie:"Du latin oliva, « olivier », arbre symbole de paix depuis l'Antiquité (le rameau apporté par la colombe après le déluge).", piste:"Ce prénom porte souvent une mission de pacification, de retour au calme après une période de conflit. Peut-être êtes-vous celui qui, dans votre famille, ramène la paix." },

  { prenom:"Ophélie", etymologie:"Du grec ophelos, « secours, aide ». Rendue célèbre par le personnage tragique de Shakespeare, morte de chagrin d'amour.", piste:"Il arrive que ce prénom porte une sensibilité amoureuse intense, parfois vécue comme un fardeau plus que comme une joie. Est-ce que l'amour a, dans votre histoire, souvent été associé à la souffrance ?" },

  { prenom:"Odile", etymologie:"Du germanique od, « richesse » et hild, « combat ». Sainte Odile, patronne de l'Alsace, est née aveugle et retrouve la vue au baptême.", piste:"Les Odile portent parfois une histoire liée à une difficulté à « voir » quelque chose dans la famille, ou au contraire à une clairvoyance retrouvée après une période d'aveuglement. Cela vous évoque-t-il quelque chose ?" },

  { prenom:"Paul", etymologie:"Du latin paulus, « petit, humble ». Saint Paul, l'apôtre, est celui qui se retourne radicalement après avoir persécuté les premiers chrétiens.", piste:"Il arrive que les Paul portent une histoire de retournement, un moment où toute une direction de vie change brutalement. Y a-t-il, dans votre famille, un événement qui a fait basculer une trajectoire ?" },

  { prenom:"Pauline", etymologie:"Féminin de Paul, portant la même racine d'humilité. Un prénom qui ne cherche pas à en imposer.", piste:"Ce prénom porte parfois une discrétion choisie, un refus de prendre toute la place même quand on le mériterait. Est-ce une tendance que vous reconnaissez chez vous ?" },

  { prenom:"Philippe", etymologie:"Du grec philos, « ami » et hippos, « cheval » : « ami des chevaux ». Un prénom associé à la noblesse et à la maîtrise.", piste:"Les Philippe portent parfois un goût pour la maîtrise et le contrôle des situations, hérité peut-être d'un besoin ancien de reprendre en main une situation familiale chaotique." },

  { prenom:"Perrine", etymologie:"Féminin de Pierre, du grec petra, « pierre, roc ». Un prénom qui évoque la solidité et la fondation.", piste:"Il arrive que les Perrine portent le rôle de pilier familial, celle sur qui les autres s'appuient sans toujours le reconnaître. Est-ce une place que vous occupez ?" },

  { prenom:"Quentin", etymologie:"Du latin quintus, « cinquième ». À l'origine, un prénom simplement donné selon le rang de naissance.", piste:"Il arrive que les Quentin portent une question de place dans la fratrie ou dans la lignée, même sans être réellement le cinquième enfant. Est-ce que la question du rang, de l'ordre, a de l'importance dans votre famille ?" },

  { prenom:"Romain", etymologie:"Du latin romanus, « de Rome ». Un prénom qui porte l'idée d'appartenance à un empire, à une civilisation entière.", piste:"Les Romain portent parfois un sens aigu de l'appartenance à un groupe, une famille, une histoire plus large qu'eux-mêmes. Est-ce un sentiment qui vous est familier ?" },

  { prenom:"Rose", etymologie:"Du latin rosa. La fleur associée depuis toujours à l'amour, mais aussi à ses épines.", piste:"Ce prénom porte souvent une dualité entre douceur apparente et force réelle. Il arrive que les Rose se révèlent bien plus résistantes que leur prénom ne le laisse deviner. Cela vous ressemble-t-il ?" },

  { prenom:"Raphaël", etymologie:"De l'hébreu « Dieu guérit ». Dans la tradition, Raphaël est l'archange guérisseur, celui qui accompagne les voyages dangereux.", piste:"Il arrive que les Raphaël portent une vocation de soin, explicite (métier) ou implicite (celui qui répare les liens familiaux abîmés). Est-ce un rôle que vous reconnaissez ?" },

  { prenom:"Rémi", etymologie:"Du latin remigius, lié à remigare, « ramer ». Un prénom lié à l'effort constant, au mouvement qu'on entretient soi-même.", piste:"Les Rémi portent parfois une endurance discrète, une capacité à avancer sans relâche même sans reconnaissance immédiate. Est-ce que cela vous correspond ?" },

  { prenom:"Sophie", etymologie:"Du grec sophia, « sagesse ». Un des rares prénoms construits directement sur une qualité intellectuelle plutôt que physique ou morale.", piste:"Il arrive que les Sophie portent une attente d'être la voix de la raison dans la famille, celle qu'on consulte avant de décider. Est-ce une place que vous occupez ?" },

  { prenom:"Simon", etymologie:"De l'hébreu « celui qui entend ». Simon-Pierre, dans les évangiles, est celui qui renie puis revient, celui dont la fidélité vacille avant de s'affermir.", piste:"Les Simon portent parfois une histoire de doute suivi d'un engagement plus fort. Y a-t-il, dans votre parcours ou celui d'un proche, un moment où la confiance a été ébranlée avant de se reconstruire ?" },

  { prenom:"Sarah", etymologie:"De l'hébreu « princesse ». Dans la Genèse, Sarah attend très longtemps avant de pouvoir enfanter — l'attente est inscrite dans son histoire même.", piste:"Il arrive que ce prénom porte une mémoire d'attente prolongée, un désir longtemps différé avant de se réaliser. Est-ce que l'idée d'attendre, de patienter pour obtenir ce qu'on désire, résonne dans votre histoire familiale ?" },

  { prenom:"Stéphane", etymologie:"Du grec stephanos, « couronne ». La même racine qu'Étienne, mais dans sa forme plus moderne et laïque.", piste:"Les Stéphane portent parfois une attente de reconnaissance ou de réussite visible, une « couronne » à mériter aux yeux de la famille. Cela vous parle-t-il ?" },

  { prenom:"Sylvie", etymologie:"Du latin silva, « forêt ». Un prénom qui évoque un lieu dense, vivant, parfois difficile à traverser mais riche de ressources.", piste:"Il arrive que les Sylvie portent un lien fort à la nature, à un besoin de retrait ou de ressourcement loin du bruit. Peut-être portez-vous aussi une forme de complexité intérieure, comme une forêt qu'on ne perçoit pas d'un seul regard." },

  { prenom:"Thomas", etymologie:"De l'araméen « jumeau ». L'apôtre Thomas est celui qui doute, qui a besoin de toucher pour croire.", piste:"Les Thomas portent parfois un besoin de preuves concrètes plutôt que de convictions reçues toutes faites. Est-ce que la confiance aveugle vous est difficile, et préférez-vous vérifier par vous-même ?" },

  { prenom:"Théo", etymologie:"Diminutif de Théodore, du grec theos, « dieu » et doron, « don » : « don de Dieu ».", piste:"Il arrive que ce prénom porte, comme Mathieu, l'idée d'un enfant reçu comme une grâce inattendue. Y a-t-il, dans le contexte de votre naissance, quelque chose qui a été vécu comme un cadeau inespéré ?" },

  { prenom:"Tiphaine", etymologie:"Variante bretonne d'Épiphanie, du grec epiphaneia, « apparition, manifestation ». Le jour où, dans la tradition chrétienne, le divin se révèle au monde.", piste:"Ce prénom porte parfois l'idée d'une révélation à venir, quelque chose qui doit se manifester au grand jour à un moment donné. Peut-être portez-vous une vérité familiale qui attend encore d'être dite." },

  { prenom:"Ugo", etymologie:"Variante italienne de Hugo, gardant la même racine germanique liée à l'intelligence et à l'esprit.", piste:"Comme les Hugo, les Ugo portent souvent un rôle de réflexion, de recul, celui qui prend le temps de comprendre avant d'agir." },

  { prenom:"Valentine", etymologie:"Du latin valens, « fort, vaillant ». Un prénom qui évoque la force plus que la tendresse, malgré son association moderne à l'amour.", piste:"Il arrive que les Valentine portent une force intérieure peu visible au premier abord, une résistance qui se révèle surtout dans l'épreuve. Est-ce que cela vous ressemble ?" },

  { prenom:"Victor", etymologie:"Du latin victor, « vainqueur ». Un prénom qui annonce directement la victoire, sans détour.", piste:"Les Victor portent parfois une pression de réussite explicite, l'idée qu'échouer n'est simplement pas une option envisagée. Est-ce une attente que vous ressentez, peut-être héritée d'un ancêtre qui a dû se battre pour s'en sortir ?" },

  { prenom:"Vincent", etymologie:"Du latin vincens, « qui vainc, qui l'emporte ». Une racine proche de Victor, mais dans une forme plus progressive : celui qui est en train de vaincre.", piste:"Il arrive que les Vincent portent une histoire de combat encore en cours plutôt que déjà remporté — un défi familial qui se transmet de génération en génération sans être tout à fait résolu." },

  { prenom:"Violette", etymologie:"Du latin viola. Une fleur discrète, souvent cachée sous les feuilles, mais reconnaissable à son parfum.", piste:"Ce prénom porte parfois une discrétion trompeuse — une présence qu'on ne remarque pas d'abord, mais qui marque durablement. Est-ce que les gens vous découvrent souvent plus profondément qu'ils ne l'imaginaient au premier abord ?" },

  { prenom:"William", etymologie:"Forme anglaise de Guillaume, portant la même racine de volonté protectrice.", piste:"Comme les Guillaume, les William portent souvent une responsabilité de protection, parfois teintée d'un désir d'ouverture vers l'ailleurs, l'international, un autre monde que celui de la famille d'origine." },

  { prenom:"Xavier", etymologie:"Du basque etxe berri, « maison neuve ». Un prénom qui porte littéralement l'idée de recommencement, de foyer à reconstruire.", piste:"Il arrive que les Xavier portent une mission de reconstruction familiale après une rupture — un déménagement, une séparation, un recommencement à zéro. Cela résonne-t-il avec votre histoire ?" },

  { prenom:"Yasmine", etymologie:"Du persan yasamin, désignant la fleur de jasmin, connue pour son parfum qui se diffuse loin, même la nuit.", piste:"Ce prénom porte parfois une présence qui se fait sentir au-delà de ce qu'on montre directement — une influence discrète mais réelle sur son entourage. Est-ce que cela vous parle ?" },

  { prenom:"Yves", etymologie:"Du germanique iv, « if », arbre associé à la fois à la mort et à l'éternité dans les traditions celtiques.", piste:"Il arrive que les Yves portent un rapport particulier au temps long, à ce qui traverse les générations sans disparaître. Peut-être êtes-vous celui qui garde la mémoire familiale vivante." },

  { prenom:"Zoé", etymologie:"Du grec zoê, « vie ». L'un des prénoms les plus directs qui soient : il ne désigne rien d'autre que la vie elle-même.", piste:"Ce prénom porte souvent une attente très forte, presque vitale, mise dans la naissance de l'enfant. Peut-être êtes-vous arrivée à un moment où votre famille avait besoin, très concrètement, de se sentir revivre." },

  { prenom:"Caroline", etymologie:"Du latin Carolus (Charles), du germanique 'karl' — homme libre, fort. Prénom royal porté par plusieurs reines d'Europe.", piste:"Caroline peut porter un paradoxe : un prénom de force et de liberté, souvent attribué dans des lignées où la liberté féminine était contrainte. Celle qui porte un nom de reine mais a grandi dans l'ombre — et qui cherche à réconcilier ces deux héritages." },

  { prenom:"Catherine", etymologie:"Du grec 'katharos', pur, net, sans tache. Prénom de martyres et de reines, l'une des plus portées en France au XXe siècle.", piste:"Catherine porte souvent un programme de pureté — celle qui ne doit pas faire de vague, qui préserve l'image familiale. La pression d'être irréprochable peut venir d'une lignée où la honte et le regard des autres pesaient lourd." },

  { prenom:"Christelle", etymologie:"Du latin 'Christus' (l'oint, le consacré) avec le suffixe diminutif -elle. La petite consacrée. Contient phonétiquement le prénom Christine.", piste:"Christelle porte souvent une double mission : être dans la continuité de sa mère (Christ-elle, telle Christine) tout en cherchant à exister par elle-même. Une tension entre loyauté filiale et désir d'être soi, entre porter la croix et déployer ses propres ailes." },

  { prenom:"Claire", etymologie:"Du latin 'clara', claire, lumineuse, brillante. Associé à sainte Claire d'Assise, fondatrice des Clarisses.", piste:"Claire porte souvent la mission d'éclairer les autres — d'être celle qui voit clair, qui rassure, qui donne du sens. Ce don de clarté peut venir d'une lignée où la confusion régnait et où quelqu'un devait voir pour tous. La lumineuse qui parfois s'oublie à force d'illuminer." },

  { prenom:"Dominique", etymologie:"Du latin 'dominicus', qui appartient au Seigneur, lié au dimanche. Prénom mixte, popularisé par saint Dominique.", piste:"Dominique porte l'ambiguïté d'un prénom mixte — une identité parfois difficile à saisir, une adaptation permanente à ce qu'on attendait d'elle selon les contextes. Elle peut avoir grandi dans une famille où les rôles n'étaient pas clairement définis." },

  { prenom:"Françoise", etymologie:"Féminin de François, du germanique 'frank' — libre, franc. La femme libre par excellence. Prénom emblématique du XXe siècle en France.", piste:"Françoise porte un paradoxe : un prénom de liberté pour des femmes qui ont souvent vécu dans des systèmes contraignants. Elle peut porter la mission de réaliser ce que ses ancêtres n'ont pas pu vivre — être vraiment libre, dire vraiment ce qu'elle pense." },

  { prenom:"Isabelle", etymologie:"Forme hispanique d'Élisabeth, de l'hébreu 'Elisheba' — Dieu est mon serment, plénitude divine. Prénom de reines, populaire du XIIIe siècle à aujourd'hui.", piste:"Isabelle porte une noblesse intérieure souvent non reconnue. Elle peut avoir grandi avec le sentiment de valoir plus que ce qu'on lui accordait. Son programme peut être celui de la dignité retrouvée — une lignée où les femmes ont dû se battre pour être respectées." },

  { prenom:"Jocelyne", etymologie:"Du germanique 'Gautzelin', diminutif de noms composés avec 'Gaut' (peuple goth). Prénom discret, populaire dans les années 1950-1960.", piste:"Jocelyne porte souvent le programme de celle qui passe inaperçue — qui sert sans bruit, qui s'efface pour laisser de la place aux autres. Une loyauté au clan qui peut se traduire par une difficulté à occuper pleinement la sienne propre." },

  { prenom:"Laetitia", etymologie:"Du latin 'laetitia', joie, allégresse, bonheur. Prénom rare avant les années 1980, portant en lui une promesse lumineuse.", piste:"Laetitia est souvent nommée pour compenser — née dans une famille qui avait besoin de joie, après une période de deuil ou de difficulté. Elle peut porter le poids de devoir être heureuse pour les autres, d'incarner la légèreté que la lignée attendait." },

  { prenom:"Muriel", etymologie:"D'origine celtique ou hébraïque ('myrrhe de Dieu'), parfum précieux et amer à la fois. Prénom rare et délicat, populaire dans les années 1960-1970.", piste:"Muriel porte la dualité du parfum : précieux et amer. Elle peut avoir été perçue comme fragile alors qu'elle était profonde. Sa lignée a peut-être valorisé l'apparence au détriment de l'essence — et Muriel cherche à être vue pour ce qu'elle est vraiment." },

  { prenom:"Nathalie", etymologie:"Du latin 'natalis', née le jour de Noël, liée à la nativité. Prénom très populaire en France dans les années 1960-1970.", piste:"Nathalie porte le programme de la naissance — celle qui arrive attendue, désirée. Mais cette attente peut avoir été lourde à porter. Elle peut incarner une loyauté profonde à sa famille d'origine, avec une difficulté à s'en séparer sans culpabilité." },

  { prenom:"Sandra", etymologie:"Forme abrégée d'Alexandra, du grec 'alexein' (protéger) et 'aner' (homme). La protectrice. Popularisé en France dans les années 1970.", piste:"Sandra porte le programme de la protectrice — celle qui veille, qui défend, qui anticipe les dangers. Sa force peut venir d'une blessure ancienne : quand personne ne l'a protégée, elle est devenue celle qui protège." },

  { prenom:"Sandrine", etymologie:"Forme française diminutive de Sandra/Alexandra. Même racine grecque — la protectrice, dans une version plus douce et intime.", piste:"Sandrine adoucit le programme d'Alexandra — la protectrice accessible, qui soutient dans la discrétion. Elle peut porter la tendance à mettre les besoins des autres avant les siens, convaincue que sa valeur tient dans ce qu'elle apporte." },

  { prenom:"Sylvie", etymologie:"Du latin 'silva', la forêt. Celle qui vient des bois, de la nature profonde. Très populaire en France dans les années 1960.", piste:"Sylvie porte en elle quelque chose de sauvage et de discret à la fois — comme la forêt, riche en profondeur mais peu visible en surface. Elle peut avoir appris à se taire, à se fondre dans le décor familial, gardant un monde intérieur dense que peu de gens ont pu traverser." },

  { prenom:"Valérie", etymologie:"Du latin 'valere', être fort, vigoureux. La valeurease, celle qui a de la valeur. Populaire en France dans les années 1960-1970.", piste:"Valérie porte le programme de la force — souvent née dans une lignée où quelqu'un devait être solide. Elle peut avoir appris très tôt à ne pas montrer sa fragilité. Sa force est réelle, mais peut cacher une fatigue ancienne de devoir toujours être valide." },

  { prenom:"Véronique", etymologie:"Du grec 'pherein' (porter) et 'nikê' (victoire) — celle qui porte la victoire. Aussi liée à sainte Véronique qui essuya le visage du Christ.", piste:"Véronique porte souvent le programme de celle qui recueille la souffrance des autres — qui essuie, qui apaise, qui absorbe. Un don de compassion profond, parfois au détriment d'elle-même, hérité d'une lignée où prendre soin des blessures était le rôle des femmes." },


];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRENOMS_DATA;
}
