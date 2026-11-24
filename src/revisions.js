// Compléments classés par identifiant stable de notion.
const revisions = {
  "equations": {
    "course": [
      [
        "Que signifie « résoudre » ?",
        "Une équation affirme que deux expressions ont la même valeur. Résoudre dans ℝ, c’est trouver tous les réels qui rendent cette affirmation vraie. Pour 2x + 1 = 7, essayer x = 3 confirme une solution. Pour prouver que c’est la seule, il faut un raisonnement qui couvre tous les réels."
      ],
      [
        "Pourquoi peut-on déplacer un terme ?",
        "Dans 5x + 4 = 2x + 13, soustraire 2x aux deux membres conserve exactement les solutions. On obtient 3x + 4 = 13, puis 3x = 9. Le terme semble changer de signe parce qu’on a effectué la même soustraction des deux côtés."
      ],
      [
        "Fractions et domaine",
        "Avec des dénominateurs numériques, choisis un multiple commun et multiplie chaque membre entier. Avec un dénominateur variable, exclus d’abord les valeurs qui l’annulent. L’équation (x + 1)/(x − 2) = 3 ne se pose que pour x ≠ 2. Sur ce domaine, multiplier par x − 2 est réversible."
      ],
      [
        "Quand une transformation peut ajouter une réponse",
        "Élever au carré efface un signe. Par exemple, x = −3 implique x² = 9, mais cette dernière équation accepte aussi 3. Après une telle transformation, teste chaque candidat dans l’équation initiale."
      ]
    ],
    "reminders": [
      "Équivalence ⇔ : les deux équations ont exactement les mêmes solutions sur le domaine choisi.",
      "0x = 0 est vraie pour tout x du domaine. 0x = 5 est impossible.",
      "Pour AB = 0, résous A = 0 ou B = 0. Diviser par A pourrait faire perdre les solutions où A = 0."
    ],
    "advanced": [
      [
        "Un dénominateur qui dépend de x",
        "(2x + 1)/(x − 1) = 5",
        [
          "Le domaine est ℝ privé de 1.",
          "Sur ce domaine, multiplie par x − 1 : 2x + 1 = 5x − 5.",
          "Regroupe : 6 = 3x, donc x = 2.",
          "Contrôle dans le quotient : (4 + 1)/(2 − 1) = 5."
        ],
        "S = {2}"
      ],
      [
        "Discuter une équation selon un paramètre",
        "Pour m réel, résoudre (m − 2)x = m² − 4.",
        [
          "Factorise le membre de droite : m² − 4 = (m − 2)(m + 2).",
          "Si m ≠ 2, le coefficient m − 2 est non nul. La division donne x = m + 2.",
          "Si m = 2, l’équation devient 0x = 0. Tous les réels conviennent.",
          "Vérification de ce cas : avec m = 2, même x = 100 satisfait l’équation."
        ],
        "Si m ≠ 2, S = {m + 2}. Si m = 2, S = ℝ."
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Résous 7 − 3x = 22.",
        "hint": "Commence par enlever 7.",
        "steps": [
          "Soustrais 7 : −3x = 15.",
          "Divise par −3 : x = −5. Vérifie : 7 − 3(−5) = 22."
        ],
        "result": "S = {−5}"
      },
      {
        "level": "Application",
        "question": "Résous (x − 2)/3 + (x + 1)/2 = 4.",
        "hint": "Quel nombre est à la fois multiple de 3 et de 2 ?",
        "steps": [
          "Multiplie l’égalité entière par 6 : 2(x − 2) + 3(x + 1) = 24.",
          "Développe : 5x − 1 = 24, puis 5x = 25.",
          "Vérifie : (5 − 2)/3 + (5 + 1)/2 = 1 + 3."
        ],
        "result": "S = {5}"
      },
      {
        "level": "Approfondissement",
        "question": "Résous (x² − 4)/(x − 2) = 4.",
        "hint": "Note la valeur interdite avant de simplifier.",
        "steps": [
          "Il faut x ≠ 2. Factorise x² − 4 = (x − 2)(x + 2).",
          "Sur ce domaine, l’équation devient x + 2 = 4. Son unique candidat est 2.",
          "Ce candidat annule le dénominateur initial."
        ],
        "result": "S = ∅"
      },
      {
        "level": "Synthèse",
        "question": "Deux bassins contiennent 120 L et 30 L. Le premier perd 3 L/min, le second reçoit 2 L/min. Quand leurs volumes sont-ils égaux ?",
        "hint": "Exprime les deux volumes avec le même temps t.",
        "steps": [
          "Au bout de t minutes, V₁ = 120 − 3t et V₂ = 30 + 2t. Le premier bassin se vide en 40 min. Le modèle vaut pour 0 ≤ t ≤ 40, en supposant que le second ne déborde pas.",
          "Résous 120 − 3t = 30 + 2t : 90 = 5t, donc t = 18.",
          "18 est dans le domaine. Les volumes valent 120 − 54 = 66 et 30 + 36 = 66."
        ],
        "result": "Après 18 minutes, chaque bassin contient 66 L."
      }
    ],
    "related": [
      "inequations",
      "factorisee"
    ]
  },
  "inequations": {
    "course": [
      [
        "Comparer deux membres",
        "L’ensemble des solutions peut remplir toute une portion de la droite. Pour 2x + 1 ≤ 7, tous les x ≤ 3 conviennent. Le 3 est inclus, car l’égalité 7 ≤ 7 est vraie."
      ],
      [
        "Pourquoi le sens change-t-il ?",
        "Multiplier par −1 remplace chaque nombre par son opposé. Sur la droite graduée, c’est une symétrie autour de 0 : 2 < 5 devient −2 > −5. Un produit par un nombre négatif inverse donc l’ordre. Une translation conserve l’ordre."
      ],
      [
        "Lire « et » et « ou »",
        "Avec « et », garde l’intersection : x ≥ −1 et x < 4 donne [−1 ; 4[. Avec « ou », prends l’union : x < −1 ou x ≥ 4 donne ]−∞ ; −1[ ∪ [4 ; +∞[. Les bornes infinies sont toujours ouvertes."
      ],
      [
        "Signe d’un quotient",
        "Quand x se trouve au dénominateur, son signe peut varier. Pour résoudre (x − 2)/(x + 1) ≥ 0, garde le quotient, place −1 et 2 sur la droite et étudie les signes des deux facteurs. −1 reste interdit, même si le signe demandé autorise zéro."
      ]
    ],
    "reminders": [
      "Pour un produit ou un quotient non nul, deux signes identiques donnent +, deux signes différents donnent −.",
      "Intersection ∩ : conditions simultanées. Union ∪ : au moins une condition satisfaite.",
      "Pour r ≥ 0, |x − a| ≤ r équivaut à a − r ≤ x ≤ a + r : c’est une distance à a."
    ],
    "advanced": [
      [
        "Un quotient avec une valeur interdite",
        "(2x − 4)/(x + 3) ≥ 0",
        [
          "Le numérateur s’annule en 2 et le dénominateur en −3. Place −3 avant 2.",
          "À gauche de −3, les deux facteurs sont négatifs : le quotient est positif.",
          "Entre −3 et 2, les signes sont − et + : le quotient est négatif. Après 2, les deux sont positifs.",
          "Inclus 2 pour l’égalité et exclus toujours −3."
        ],
        "S = ]−∞ ; −3[ ∪ [2 ; +∞["
      ],
      [
        "Un écart maximal",
        "|2x − 3| ≤ 5",
        [
          "Une distance à zéro inférieure ou égale à 5 donne −5 ≤ 2x − 3 ≤ 5.",
          "Ajoute 3 partout : −2 ≤ 2x ≤ 8.",
          "Divise par 2, positif : −1 ≤ x ≤ 4. Aux deux extrémités, la distance vaut exactement 5."
        ],
        "S = [−1 ; 4]"
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Résous 4 − 5x < 19.",
        "hint": "À la dernière étape, regarde le signe du diviseur.",
        "steps": [
          "Soustrais 4 : −5x < 15.",
          "Divise par −5 et inverse le sens : x > −3.",
          "La borne −3 donne 19 < 19, qui est faux."
        ],
        "result": "S = ]−3 ; +∞["
      },
      {
        "level": "Application",
        "question": "Résous simultanément 2x + 1 ≥ −3 et 3x − 4 < 8.",
        "hint": "Résous séparément avant de prendre l’intersection.",
        "steps": [
          "La première condition donne 2x ≥ −4, donc x ≥ −2.",
          "La seconde donne 3x < 12, donc x < 4.",
          "Il faut conserver les valeurs communes aux deux intervalles."
        ],
        "result": "S = [−2 ; 4["
      },
      {
        "level": "Approfondissement",
        "question": "Résous (x + 2)/(3 − x) < 0.",
        "hint": "Le facteur 3 − x est positif à gauche de 3.",
        "steps": [
          "Les bornes critiques sont −2 (zéro) et 3 (valeur interdite).",
          "Sur ]−∞ ; −2[, le quotient a le signe −/+. Sur ]−2 ; 3[, il a le signe +/+. Sur ]3 ; +∞[, il a le signe +/−.",
          "Retiens les intervalles de signe négatif. Les deux bornes sont exclues."
        ],
        "result": "S = ]−∞ ; −2[ ∪ ]3 ; +∞["
      },
      {
        "level": "Synthèse",
        "question": "Une salle propose A à 18 € puis 3 € par séance et B à 6 € puis 5 € par séance. À partir de combien de séances A est-il strictement moins cher, avec un budget de 48 € pour A ?",
        "hint": "Traduis la comparaison et le budget par deux contraintes différentes.",
        "steps": [
          "Pour n séances, demande 18 + 3n < 6 + 5n. Cela donne 12 < 2n, donc n > 6.",
          "Le budget impose 18 + 3n ≤ 48, soit n ≤ 10.",
          "n compte des séances. Dans ]6 ; 10], les entiers possibles sont 7, 8, 9 et 10."
        ],
        "result": "A est strictement moins cher dès 7 séances. Avec ce budget, on peut en prendre de 7 à 10."
      }
    ],
    "related": [
      "equations",
      "signe"
    ]
  },
  "trinome": {
    "course": [
      [
        "Un polynôme et ses coefficients",
        "La forme ax² + bx + c est de degré 2 si a ≠ 0. Les coefficients sont attachés aux puissances de x. Dans 5 − x², a = −1, b = 0 et c = 5. La valeur de c se lit aussi sur le graphique : f(0) = c."
      ],
      [
        "Image, antécédent, racine",
        "Calculer une image, c’est partir de x pour obtenir f(x). Chercher les antécédents d’un nombre k, c’est partir de k puis résoudre f(x) = k. Une racine est un antécédent particulier, celui de 0. Un même nombre peut avoir deux antécédents."
      ],
      [
        "Choisir une écriture selon la question",
        "Pour f(x) = x² − 4x + 3, la forme développée donne immédiatement f(0) = 3. La forme (x − 1)(x − 3) donne les zéros 1 et 3. Avec (x − 2)² − 1, on voit que f(x) ≥ −1. Trois questions, une même fonction."
      ],
      [
        "Identifier des coefficients",
        "Deux polynômes égaux pour tout x ont les mêmes coefficients puissance par puissance. Cela permet de retrouver une formule inconnue ou de contrôler un développement. Vérifier une seule valeur de x peut déceler une erreur, mais ne prouve pas une identité."
      ]
    ],
    "reminders": [
      "f(0) = c. Si c = 0, alors 0 est une racine et x se met en facteur.",
      "Chercher f(x) = k revient à chercher les racines du polynôme f(x) − k.",
      "Pour une identité valable pour tout x, développe, réduis et compare les coefficients."
    ],
    "advanced": [
      [
        "Reconstruire un trinôme à partir de trois images",
        "Déterminer f si f(0) = 1, f(1) = 4 et f(−1) = 2.",
        [
          "Écris f(x) = ax² + bx + c. La première image donne c = 1.",
          "Les deux autres donnent a + b = 3 et a − b = 1.",
          "Additionne : 2a = 4, donc a = 2. Il vient b = 1.",
          "Contrôle : aux abscisses 0, 1, −1, on retrouve 1, 4, 2."
        ],
        "f(x) = 2x² + x + 1"
      ],
      [
        "Intersection d’une droite et d’une parabole",
        "Où y = x² − 2x et y = x + 4 se rencontrent-elles ?",
        [
          "À une intersection, les deux ordonnées sont égales : x² − 2x = x + 4.",
          "Ramène tout à gauche : x² − 3x − 4 = (x − 4)(x + 1) = 0.",
          "Les abscisses sont 4 et −1. Utilise la droite pour les ordonnées : 8 et 3."
        ],
        "Points d’intersection : (−1 ; 3) et (4 ; 8)."
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Lis a, b et c dans 7x − 2x².",
        "hint": "Range les termes en commençant par le degré le plus élevé.",
        "steps": [
          "Écris −2x² + 7x + 0.",
          "Lis le coefficient devant chaque puissance."
        ],
        "result": "a = −2, b = 7, c = 0"
      },
      {
        "level": "Application",
        "question": "Pour f(x) = −2x² + 3x + 1, calcule f(−2) et f(2).",
        "hint": "Mets les nombres négatifs entre parenthèses.",
        "steps": [
          "f(−2) = −2 × 4 − 6 + 1 = −13.",
          "f(2) = −2 × 4 + 6 + 1 = −1. Le terme 3x explique la différence."
        ],
        "result": "f(−2) = −13 et f(2) = −1"
      },
      {
        "level": "Approfondissement",
        "question": "Trouve tous les antécédents de 5 par f(x) = (x − 2)² + 1.",
        "hint": "Quel carré vaut 4 ?",
        "steps": [
          "Résous (x − 2)² + 1 = 5, soit (x − 2)² = 4.",
          "Les deux possibilités sont x − 2 = 2 ou x − 2 = −2.",
          "Les deux valeurs donnent effectivement 5."
        ],
        "result": "Les antécédents sont 0 et 4."
      },
      {
        "level": "Synthèse",
        "question": "Une parabole passe par (0 ; 2), (1 ; 2) et (2 ; 6). Retrouve son expression et prévois son ordonnée en 3.",
        "hint": "Remplace les trois points dans ax² + bx + c.",
        "steps": [
          "Le point d’abscisse 0 donne c = 2. Le suivant donne a + b = 0.",
          "Le troisième donne 4a + 2b = 4. Remplace b par −a : 2a = 4.",
          "Donc a = 2, b = −2. Calcule f(3) = 18 − 6 + 2."
        ],
        "result": "f(x) = 2x² − 2x + 2 et f(3) = 14."
      }
    ],
    "related": [
      "canonique",
      "factorisee",
      "discriminant"
    ]
  },
  "canonique": {
    "course": [
      [
        "Former un carré parfait",
        "Développe (x + u)² = x² + 2ux + u². Pour retrouver x² + 8x, prends u = 4 : le développement contient aussi 16. On compense en écrivant x² + 8x = (x + 4)² − 16. C’est la complétion du carré."
      ],
      [
        "D’où vient −b/(2a) ?",
        "Dans a(x − α)² + β, le développement donne ax² − 2aαx + aα² + β. En comparant le coefficient de x avec b, on obtient −2aα = b. Comme a ≠ 0, α = −b/(2a). Pour x = α, le carré s’annule, donc β = f(α)."
      ],
      [
        "Interpréter un sommet",
        "Dans 2(x − 3)² − 4, le terme ajouté à −4 est positif ou nul. La plus petite valeur est −4, atteinte seulement en 3. Si le coefficient devant le carré est négatif, le sommet correspond au maximum."
      ],
      [
        "Passer du sommet à une famille de courbes",
        "Connaître S(α ; β) donne f(x) = a(x − α)² + β. Plusieurs paraboles ont ce sommet. Un point supplémentaire d’abscisse différente de α permet de déterminer a en le substituant dans l’expression."
      ]
    ],
    "reminders": [
      "Dans (x + 2)², l’abscisse du sommet est −2.",
      "Pour compléter un carré, sors d’abord le coefficient de x² des termes qui contiennent x.",
      "La valeur β est une ordonnée. L’abscisse α indique où cet extremum est atteint."
    ],
    "advanced": [
      [
        "Compléter le carré avec des fractions",
        "Écrire 3x² − 5x + 1 sous forme canonique.",
        [
          "Sors 3 : 3[x² − (5/3)x] + 1.",
          "La moitié de −5/3 est −5/6. Le crochet devient (x − 5/6)² − 25/36.",
          "Distribue 3 : 3(x − 5/6)² − 25/12 + 1.",
          "Réduis la constante : −25/12 + 12/12 = −13/12."
        ],
        "f(x) = 3(x − 5/6)² − 13/12"
      ],
      [
        "Retrouver une parabole à partir du sommet",
        "Une parabole de sommet S(−1 ; 4) passe par A(1 ; −4).",
        [
          "Le sommet impose f(x) = a(x + 1)² + 4.",
          "Le point A donne −4 = 4a + 4, donc a = −2.",
          "Contrôle : f(−1) = 4 et f(1) = −4. Le coefficient négatif indique un maximum."
        ],
        "f(x) = −2(x + 1)² + 4"
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Lis le sommet et l’axe de f(x) = −(x + 5)² + 3.",
        "hint": "Cherche la valeur qui annule le carré.",
        "steps": [
          "Le carré s’annule en x = −5.",
          "La valeur correspondante est 3. La droite verticale passant par le sommet est l’axe."
        ],
        "result": "Sommet (−5 ; 3), axe x = −5."
      },
      {
        "level": "Application",
        "question": "Écris x² + 10x + 21 sous forme canonique.",
        "hint": "Reconnais le début du développement de (x + 5)².",
        "steps": [
          "(x + 5)² = x² + 10x + 25.",
          "Pour obtenir 21, retire 4."
        ],
        "result": "f(x) = (x + 5)² − 4"
      },
      {
        "level": "Approfondissement",
        "question": "Détermine l’extremum de −3x² + 9x − 2 en valeur exacte.",
        "hint": "Calcule α avant de remplacer dans f.",
        "steps": [
          "α = −9/(−6) = 3/2.",
          "β = −27/4 + 27/2 − 2 = 19/4.",
          "Le coefficient −3 est négatif. Le carré fait diminuer la valeur dès que x s’éloigne de 3/2."
        ],
        "result": "Maximum 19/4, atteint en x = 3/2."
      },
      {
        "level": "Synthèse",
        "question": "Une arche a pour sommet (2 ; 6) et passe par (0 ; 2). À quelles abscisses atteint-elle la hauteur 5 ?",
        "hint": "Commence par reconstituer l’équation de l’arche.",
        "steps": [
          "Écris h(x) = a(x − 2)² + 6. Avec (0 ; 2), obtiens 2 = 4a + 6, donc a = −1.",
          "Pour h(x) = 5, il faut (x − 2)² = 1, donc x − 2 = ±1.",
          "Les deux points sont symétriques par rapport à x = 2."
        ],
        "result": "L’arche atteint la hauteur 5 en x = 1 et x = 3."
      }
    ],
    "related": [
      "trinome",
      "variations",
      "discriminant"
    ]
  },
  "discriminant": {
    "course": [
      [
        "Partir d’une équation égale à zéro",
        "Les formules du discriminant concernent ax² + bx + c = 0. Si x² + 2x = 3, calcule Δ pour x² + 2x − 3. Déplacer le 3 modifie le coefficient constant utilisé dans Δ."
      ],
      [
        "Pourquoi trois cas ?",
        "L’identité 4a(ax² + bx + c) = (2ax + b)² − Δ transforme f(x) = 0 en (2ax + b)² = Δ. Un carré réel est toujours positif ou nul. Un Δ négatif est donc impossible, zéro donne une valeur unique pour 2ax + b, et un Δ positif en donne deux."
      ],
      [
        "La formule et le contrôle",
        "Pour Δ > 0, 2ax + b = ±√Δ. Isole x pour obtenir (−b ± √Δ)/(2a). Si les deux racines sont r et s, un contrôle rapide consiste à vérifier r + s = −b/a et rs = c/a en développant a(x − r)(x − s)."
      ],
      [
        "Déplacer une droite horizontale",
        "Pour compter les intersections de la courbe avec y = k, résous f(x) − k = 0. À la hauteur du sommet, la droite est tangente à la parabole et le discriminant est nul. De part et d’autre de cette hauteur, il peut y avoir zéro ou deux intersections."
      ]
    ],
    "reminders": [
      "Le b de b² garde son signe à la substitution : si b = −3, écris (−3)².",
      "Les symboles ± donnent deux expressions. Si a < 0, celle qui contient −√Δ peut être la plus grande.",
      "Avec a ≠ 0, l’ordonnée du sommet vérifie β = −Δ/(4a)."
    ],
    "advanced": [
      [
        "Un seuil qui dépend d’un paramètre",
        "Pour quels k réels l’équation x² − 6x + k = 0 a-t-elle deux racines ?",
        [
          "Le coefficient dominant reste 1 pour tout k.",
          "Δ = 36 − 4k. Deux racines distinctes imposent 36 − 4k > 0, donc k < 9.",
          "Pour k = 9, le polynôme est (x − 3)². Pour k > 9, Δ est négatif."
        ],
        "Deux racines pour k < 9, une double pour k = 9, aucune réelle pour k > 9."
      ],
      [
        "Tester d’abord le degré",
        "Discuter mx² − 2x + 1 = 0 selon m.",
        [
          "Si m = 0, résous −2x + 1 = 0 : x = 1/2.",
          "Si m ≠ 0, Δ = 4 − 4m. Pour m < 1 et m ≠ 0, les deux racines sont (1 ± √(1 − m))/m.",
          "Pour m = 1, (x − 1)² = 0. Pour m > 1, Δ est négatif."
        ],
        "Le cas m = 0 relève du premier degré. Les autres cas se lisent avec le signe de 1 − m."
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Calcule Δ pour 3x² − 4x − 2.",
        "hint": "Écris les signes des trois coefficients.",
        "steps": [
          "a = 3, b = −4, c = −2.",
          "Δ = (−4)² − 4 × 3 × (−2) = 16 + 24."
        ],
        "result": "Δ = 40, donc deux racines réelles distinctes."
      },
      {
        "level": "Application",
        "question": "Résous 2x² + x − 6 = 0.",
        "hint": "Le discriminant est un carré parfait.",
        "steps": [
          "Δ = 1 + 48 = 49.",
          "Les racines sont (−1 − 7)/4 = −2 et (−1 + 7)/4 = 3/2."
        ],
        "result": "S = {−2 ; 3/2}"
      },
      {
        "level": "Approfondissement",
        "question": "Résous 3x² + 6x + 1 = 0 en valeur exacte.",
        "hint": "Simplifie √24 avant la division.",
        "steps": [
          "Δ = 36 − 12 = 24 et √24 = 2√6.",
          "Les racines sont (−6 ± 2√6)/6 = −1 ± √6/3.",
          "Leur somme est −2, en accord avec −b/a."
        ],
        "result": "S = {−1 − √6/3 ; −1 + √6/3}"
      },
      {
        "level": "Synthèse",
        "question": "Pour quelles valeurs de k la droite y = 2x + k est-elle tangente à y = x² + 4 ? Trouve le point de contact.",
        "hint": "Une tangence impose une solution double pour l’équation d’intersection.",
        "steps": [
          "Égalise : x² + 4 = 2x + k, soit x² − 2x + 4 − k = 0.",
          "Δ = 4 − 4(4 − k) = 4k − 12. Il est nul seulement pour k = 3.",
          "Alors x = 1 et y = 1² + 4 = 5. L’équation obtenue est bien (x − 1)² = 0."
        ],
        "result": "k = 3, point de contact (1 ; 5)."
      }
    ],
    "related": [
      "canonique",
      "factorisee",
      "signe"
    ]
  },
  "factorisee": {
    "course": [
      [
        "Le produit nul",
        "Dans ℝ, un produit est nul exactement quand au moins un facteur est nul. On peut donc remplacer une équation comme (2x − 1)(x + 3) = 0 par deux équations du premier degré. Cette règle demande un zéro dans le membre de droite."
      ],
      [
        "Pourquoi le coefficient a reste devant",
        "Le produit (x − r)(x − s) commence par x². Pour retrouver un terme dominant ax², multiplie le produit par a. En développant, tu retrouves ax² − a(r + s)x + ars. Cela explique les relations entre coefficients et racines."
      ],
      [
        "Trois façons de factoriser",
        "Repère en priorité un facteur commun, y compris une parenthèse entière. Cherche ensuite une identité remarquable comme A² − B². Si aucune forme simple ne se dégage pour un trinôme, calcule ses racines et reconstruis le produit."
      ],
      [
        "Factoriser sur les réels",
        "Avec une racine double r, les deux facteurs sont identiques : a(x − r)². Sans racine réelle, il n’existe aucune écriture en produit de deux facteurs réels de degré 1 : chaque facteur de ce type fournirait une racine."
      ]
    ],
    "reminders": [
      "Différence de carrés : A² − B² = (A − B)(A + B).",
      "Carrés parfaits : A² ± 2AB + B² = (A ± B)².",
      "Si un facteur change de signe lorsqu’on le réécrit, compense ce signe dans le produit."
    ],
    "advanced": [
      [
        "Reconnaître une parenthèse commune",
        "Factoriser (2x − 1)(x + 4) − (2x − 1)².",
        [
          "Les deux termes contiennent 2x − 1.",
          "Sors ce facteur : (2x − 1)[(x + 4) − (2x − 1)].",
          "Distribue le signe moins dans le crochet : x + 4 − 2x + 1 = 5 − x.",
          "Les zéros se lisent alors en résolvant 2x − 1 = 0 et 5 − x = 0."
        ],
        "(2x − 1)(5 − x), de racines 1/2 et 5."
      ],
      [
        "Une simplification avec un trou",
        "Simplifier (x² − x − 6)/(x² − 9) et préciser le domaine.",
        [
          "Le dénominateur (x − 3)(x + 3) interdit −3 et 3.",
          "Le numérateur se factorise en (x − 3)(x + 2).",
          "Sur le domaine autorisé, le facteur x − 3 se simplifie. La nouvelle expression seule aurait un sens en 3, mais le quotient initial n’en a pas."
        ],
        "(x + 2)/(x + 3), uniquement pour x ≠ −3 et x ≠ 3."
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Factorise 6x² + 9x.",
        "hint": "Cherche le plus grand facteur entier commun et la puissance de x commune.",
        "steps": [
          "Les deux termes contiennent 3x.",
          "Diviser 6x² puis 9x par 3x donne les facteurs restants 2x et 3."
        ],
        "result": "6x² + 9x = 3x(2x + 3)"
      },
      {
        "level": "Application",
        "question": "Résous (3x − 2)² − 16 = 0.",
        "hint": "Écris 16 comme le carré de 4.",
        "steps": [
          "La différence de carrés donne (3x − 6)(3x + 2) = 0.",
          "Les facteurs s’annulent respectivement pour x = 2 et x = −2/3."
        ],
        "result": "S = {−2/3 ; 2}"
      },
      {
        "level": "Approfondissement",
        "question": "Sachant que 2 est racine de 3x² − 5x − 2, retrouve l’autre sans calculer Δ.",
        "hint": "Utilise le produit des racines ou identifie le facteur manquant.",
        "steps": [
          "Le produit des racines vaut c/a = −2/3.",
          "Si r est la seconde, 2r = −2/3 donne r = −1/3.",
          "Développe (x − 2)(3x + 1) : on retrouve 3x² − 5x − 2."
        ],
        "result": "L’autre racine est −1/3."
      },
      {
        "level": "Synthèse",
        "question": "Résous (x² − 1)/(x − 1) = 2x − 1 puis explique pourquoi une résolution par produit en croix donne aussi le candidat 1.",
        "hint": "Conserve le domaine initial tout au long du calcul.",
        "steps": [
          "Le domaine exclut 1. Pour x ≠ 1, le quotient vaut x + 1.",
          "Résous x + 1 = 2x − 1 : x = 2.",
          "Par produit en croix, x² − 1 = (2x − 1)(x − 1) mène à (x − 1)(x − 2) = 0. Le facteur x − 1 produit un candidat interdit.",
          "En 2, le quotient et le membre de droite valent tous deux 3."
        ],
        "result": "S = {2}. La valeur 1 est exclue avant tout calcul."
      }
    ],
    "related": [
      "trinome",
      "discriminant",
      "signe"
    ]
  },
  "signe": {
    "course": [
      [
        "Lire le signe sur la courbe",
        "f(x) > 0 signifie que le point de la courbe d’abscisse x est au-dessus de l’axe horizontal. Avec f(x) ≤ 0, on cherche les portions situées sous l’axe et les points de contact avec cet axe."
      ],
      [
        "Construire le tableau avec deux racines",
        "Pour r < s, le facteur x − r est négatif à gauche de r et positif à droite. Fais de même pour x − s. À gauche de r les deux sont négatifs, entre r et s ils sont opposés, à droite de s ils sont positifs. Multiplie enfin leurs signes par celui de a."
      ],
      [
        "Ce qui change avec une racine double",
        "Pour f(x) = a(x − r)², le carré est positif des deux côtés de r. Le signe reste donc identique avant et après le zéro. Si Δ < 0, le trinôme ne rencontre jamais l’axe : il garde partout le signe de a."
      ],
      [
        "Comparer deux expressions",
        "Pour savoir quand f(x) ≥ g(x), étudie le signe de f(x) − g(x). Le résultat donne les abscisses pour lesquelles la courbe de f se trouve au-dessus de celle de g, points d’intersection compris."
      ]
    ],
    "reminders": [
      "À deux racines simples, un trinôme a le signe de a à l’extérieur et le signe opposé à l’intérieur.",
      "Aux racines, le trinôme vaut exactement zéro. À une valeur interdite d’un quotient, il n’y a aucune valeur à comparer.",
      "Une inéquation stricte exclut les zéros. Une inéquation large les autorise si l’expression est définie."
    ],
    "advanced": [
      [
        "Comparer une droite et une parabole",
        "Pour quels x la parabole y = −x² + 4x + 1 est-elle au-dessus ou sur la droite y = x − 3 ?",
        [
          "Soustrais l’ordonnée de la droite à celle de la parabole : −x² + 3x + 4.",
          "Factorise : −(x − 4)(x + 1). Les racines sont −1 et 4.",
          "Le coefficient dominant est négatif. L’écart est positif entre les racines et nul aux bornes."
        ],
        "La parabole est au-dessus ou sur la droite pour x ∈ [−1 ; 4]."
      ],
      [
        "Combiner trinôme et dénominateur",
        "Résoudre (x² − 4)/(x − 1) ≥ 0.",
        [
          "Factorise le numérateur : (x − 2)(x + 2). Place −2, 1, 2, et interdis 1.",
          "Pour x < −2, le signe est (+)/(−) = −. Pour −2 < x < 1, le signe est (−)/(−) = +.",
          "Pour 1 < x < 2, le signe est (−)/(+) = −. Pour x > 2, il est (+)/(+) = +.",
          "Les zéros −2 et 2 sont admis. La valeur interdite 1 reste exclue."
        ],
        "S = [−2 ; 1[ ∪ [2 ; +∞["
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Résous (x − 2)(x + 5) < 0.",
        "hint": "Range les deux racines avant de choisir l’intervalle.",
        "steps": [
          "Les racines sont −5 et 2. Le coefficient dominant est positif.",
          "Le signe est négatif entre les racines. L’inégalité est stricte."
        ],
        "result": "S = ]−5 ; 2["
      },
      {
        "level": "Application",
        "question": "Résous −x² + 2x + 3 ≥ 0.",
        "hint": "Factorise ou calcule les zéros.",
        "steps": [
          "On a −x² + 2x + 3 = −(x − 3)(x + 1).",
          "Les racines sont −1 et 3. Entre elles le signe est positif car a < 0. Aux racines, le signe ≥ convient."
        ],
        "result": "S = [−1 ; 3]"
      },
      {
        "level": "Approfondissement",
        "question": "Résous 4x² − 12x + 9 ≤ 0, puis la variante avec < 0.",
        "hint": "Reconnais un carré parfait.",
        "steps": [
          "L’expression est (2x − 3)². Elle ne peut être négative.",
          "Avec ≤ 0, il faut exactement 0 : 2x − 3 = 0.",
          "Avec < 0, aucune valeur réelle ne convient."
        ],
        "result": "Avec ≤ : S = {3/2}. Avec < : S = ∅."
      },
      {
        "level": "Synthèse",
        "question": "Un atelier modélise son bénéfice par B(n) = −2n² + 24n − 40 euros pour n objets, avec 0 ≤ n ≤ 12. Pour quels nombres entiers d’objets le bénéfice dépasse-t-il 24 € ?",
        "hint": "Étudie B(n) − 24 puis reviens au domaine entier.",
        "steps": [
          "B(n) − 24 = −2n² + 24n − 64 = −2(n − 4)(n − 8).",
          "Le coefficient dominant est négatif. La différence est strictement positive pour 4 < n < 8.",
          "Intersecte cet intervalle avec les entiers du domaine. Aux bornes, le bénéfice atteint seulement 24 €."
        ],
        "result": "Il faut produire 5, 6 ou 7 objets."
      }
    ],
    "related": [
      "inequations",
      "factorisee",
      "variations"
    ]
  },
  "variations": {
    "course": [
      [
        "Sens de variation et signe",
        "Une fonction croissante prend des valeurs de plus en plus grandes quand x augmente. Cela décrit une évolution, indépendamment de la position par rapport à zéro. Par exemple, x² est positive et décroissante sur ]−∞ ; 0]. À gauche de 0, se rapprocher de 0 réduit le carré."
      ],
      [
        "Raisonner avec la distance au sommet",
        "Dans a(x − α)² + β, le carré mesure la distance à α élevée au carré. En s’approchant de α, cette distance diminue. Pour a > 0, f diminue jusqu’au sommet puis augmente. Si a < 0, l’effet du carré est inversé."
      ],
      [
        "Restreindre l’étude à un intervalle",
        "Sur un segment [u ; v], les extrêmes se trouvent parmi f(u), f(v) et f(α) si α appartient au segment. Sur un intervalle ouvert, une borne peut être approchée sans être atteinte. Ainsi sur ]0 ; 1[, x² peut s’approcher de 1 mais n’a pas de maximum."
      ],
      [
        "Optimiser quand x est un entier",
        "Un sommet d’abscisse non entière donne un optimum pour la variable continue. Pour une quantité entière, cherche les entiers admissibles les plus proches du sommet et compare leurs images. Si le sommet est hors du domaine, utilise les variations pour choisir une borne."
      ]
    ],
    "reminders": [
      "Axe de symétrie : f(α − h) = f(α + h). Deux abscisses symétriques ont la même image.",
      "Maximum et minimum sont des valeurs de f. Précise aussi les abscisses où elles sont atteintes.",
      "Dans un modèle, écris le domaine et les unités avant d’interpréter le résultat."
    ],
    "advanced": [
      [
        "Une recette maximale avec un prix variable",
        "Pour q articles, le prix unitaire est 30 − 0,5q euros. Trouver la recette maximale pour 0 ≤ q ≤ 60.",
        [
          "La recette est quantité × prix : R(q) = 30q − 0,5q².",
          "La forme canonique R(q) = −0,5(q − 30)² + 450 montre un maximum en 30.",
          "Cette quantité entière appartient au domaine. Le prix unitaire vaut alors 15 €, donc 30 × 15 € = 450 €."
        ],
        "Recette maximale de 450 € pour 30 articles à 15 €."
      ],
      [
        "Un sommet entre deux entiers",
        "Maximiser P(n) = −2n² + 14n + 5 pour n entier de 0 à 8.",
        [
          "L’abscisse du sommet est −14/(−4) = 3,5. Le sommet réel est dans le domaine continu.",
          "Les entiers les plus proches sont 3 et 4. Par symétrie ils ont la même image.",
          "P(3) = −18 + 42 + 5 = 29 et P(4) = −32 + 56 + 5 = 29.",
          "Les autres entiers sont plus éloignés de l’axe. Puisque a < 0, ils donnent des valeurs plus petites."
        ],
        "Maximum entier 29, atteint en 3 et en 4."
      ]
    ],
    "practice": [
      {
        "level": "Prise en main",
        "question": "Décris les variations de (x + 2)² − 7 sur ℝ.",
        "hint": "Repère l’abscisse où s’annule le carré.",
        "steps": [
          "Le sommet est (−2 ; −7), le coefficient du carré est positif.",
          "Quand x approche −2 par la gauche, le carré diminue. Après −2 il augmente."
        ],
        "result": "Décroissante sur ]−∞ ; −2], croissante sur [−2 ; +∞[."
      },
      {
        "level": "Application",
        "question": "Trouve le minimum et le maximum de f(x) = x² − 4x + 6 sur [0 ; 5].",
        "hint": "Calcule les valeurs aux bornes et au sommet.",
        "steps": [
          "La forme canonique est (x − 2)² + 2. Le sommet est dans [0 ; 5].",
          "f(0) = 6, f(2) = 2 et f(5) = 11. Compare ces trois images."
        ],
        "result": "Minimum 2 en x = 2. Maximum 11 en x = 5."
      },
      {
        "level": "Approfondissement",
        "question": "Un rectangle est accolé à un mur. On utilise 24 m de grillage sur ses trois autres côtés. Quelles dimensions maximisent l’aire ?",
        "hint": "Si la largeur perpendiculaire au mur est x, elle intervient deux fois dans le grillage.",
        "steps": [
          "La longueur parallèle au mur vaut 24 − 2x. Pour un rectangle non dégénéré, 0 < x < 12.",
          "A(x) = x(24 − 2x) = −2(x − 6)² + 72.",
          "Le sommet x = 6 appartient au domaine. La longueur est alors 24 − 12 = 12."
        ],
        "result": "Largeur 6 m, longueur 12 m, aire maximale 72 m²."
      },
      {
        "level": "Synthèse",
        "question": "Une balle suit le modèle h(t) = −5t² + 20t + 1 en mètres, de son lancer (t = 0) à son premier contact au sol. Trouve sa hauteur maximale et la durée pendant laquelle elle est à au moins 16 m.",
        "hint": "Le sommet donne la hauteur maximale. Pour la durée, résous une inéquation, puis soustrais les deux instants.",
        "steps": [
          "h(t) = −5(t − 2)² + 21. Le sommet donne 21 m à t = 2 s.",
          "h(t) ≥ 16 équivaut à −5(t − 2)² ≥ −5, donc (t − 2)² ≤ 1.",
          "On obtient 1 ≤ t ≤ 3. Ces instants sont dans le vol : la hauteur reste positive sur [0 ; 3] et la balle redescend après 2 s.",
          "La durée vaut 3 − 1 = 2 secondes."
        ],
        "result": "Maximum de 21 m après 2 s. Hauteur d’au moins 16 m pendant 2 s, de t = 1 à t = 3."
      }
    ],
    "related": [
      "canonique",
      "signe",
      "discriminant"
    ]
  }
};
