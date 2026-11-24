// Chaque fiche regroupe le cours, quatre exemples résolus et deux exercices.
const chapters = [
{
 id:"equations", title:"Les équations", group:1, color:"peach", art:"balance",
 desc:"Isoler l’inconnue et vérifier sa solution.", intro:"Imagine une balance en équilibre. Pour trouver x, tu peux transformer ce qu’il y a sur les deux plateaux, à condition de préserver l’égalité.",
 formula:"ax + b = c  ⇔  x = (c − b)/a", condition:"Pour a ≠ 0, dans ℝ.", memo:"Tu peux ajouter ou soustraire un même nombre des deux côtés. Tu peux aussi multiplier ou diviser les deux côtés par un même nombre non nul.",
 method:["Développe les parenthèses si nécessaire.","Regroupe les termes en x d’un côté et les nombres de l’autre.","Divise par le coefficient de x, puis remplace x dans l’égalité de départ."],
 trap:"Si les termes en x disparaissent, lis l’égalité restante. Une égalité vraie donne toutes les solutions réelles. Une égalité fausse ne donne aucune solution.",
 examples:[
 ["Isoler l’inconnue","3x + 5 = 17",["Soustrais 5 aux deux membres : 3x = 12.","Divise par 3 : x = 4.","Vérifie : 3 × 4 + 5 = 17."],"S = {4}"],
 ["Avec des parenthèses","2(x − 3) = x + 4",["Développe : 2x − 6 = x + 4.","Soustrais x : x − 6 = 4.","Ajoute 6 : x = 10. Les deux membres valent 14."],"S = {10}"],
 ["Avec un dénominateur","(x + 1)/3 = 5",["Multiplie les deux membres par 3 : x + 1 = 15.","Soustrais 1 : x = 14."],"S = {14}"],
 ["Quand x disparaît","2(x + 1) = 2x + 5",["Développe : 2x + 2 = 2x + 5.","Soustrais 2x : il reste 2 = 5, ce qui est faux.","Avec 2x + 2 à droite, on aurait au contraire 2 = 2 pour tout x."],"S = ∅"]
 ], quiz:[
 ["Résous 5x − 7 = 13.",["x = 4","x = 6/5","x = −4"],0,"Ajoute 7 : 5x = 20. Divise ensuite par 5 pour trouver 4."],
 ["Quelles sont les solutions de 3(x + 2) = 3x + 6 ?",["Aucune","Tous les réels","Seulement 0"],1,"En développant, tu lis 3x + 6 = 3x + 6. Cette égalité vaut pour tout x réel."]]
},
{
 id:"inequations", title:"Les inéquations", group:1, color:"sage", art:"line",
 desc:"Comparer des expressions et lire un intervalle.", intro:"Une inéquation cherche toutes les valeurs qui rendent une comparaison vraie. Une droite graduée permet de voir d’un coup d’œil où se trouvent les solutions.",
 formula:"a < b  ⇒  ka > kb si k < 0", condition:"La même inversion vaut avec ≤ et ≥.", memo:"Multiplier ou diviser par un nombre négatif inverse le sens de l’inégalité. Ajouter ou soustraire le même nombre conserve son sens.",
 method:["Isole le terme en x comme dans une équation.","Regarde le signe du nombre par lequel tu divises.","Écris l’ensemble des solutions. Une borne est incluse avec ≤ ou ≥ et exclue avec < ou >."],
 trap:"Le signe moins présent dans « x − 4 » ne suffit pas à inverser le sens. C’est la multiplication ou la division des deux membres par un nombre négatif qui l’inverse.",
 examples:[
 ["Une borne incluse","2x + 1 ≤ 9",["Soustrais 1 : 2x ≤ 8.","Divise par 2 : x ≤ 4. La valeur 4 est admise."],"S = ]−∞ ; 4]"],
 ["Diviser par un négatif","−3x + 6 > 12",["Soustrais 6 : −3x > 6.","Divise par −3 en retournant le signe : x < −2."],"S = ]−∞ ; −2["],
 ["Encadrer une inconnue","1 < 2x + 3 ≤ 9",["Soustrais 3 aux trois membres : −2 < 2x ≤ 6.","Divise partout par 2 : −1 < x ≤ 3."],"S = ]−1 ; 3]"],
 ["Comparer deux tarifs","4 + 2x ≤ 10 + x",["Soustrais x : 4 + x ≤ 10.","Soustrais 4 : x ≤ 6.","Si x compte des trajets, conserve seulement les entiers de 0 à 6."],"Dans ℝ, S = ]−∞ ; 6]"]
 ],quiz:[
 ["Résous −2x ≤ 8.",["x ≤ −4","x ≥ −4","x ≥ 4"],1,"Diviser par −2 inverse ≤ en ≥. La borne est 8/(−2) = −4."],
 ["Quel intervalle traduit −1 ≤ x < 3 ?",["]−1 ; 3]","[−1 ; 3]","[−1 ; 3["],2,"−1 est autorisé et 3 est exclu."]]
},
{
 id:"trinome",title:"Le trinôme du second degré",group:2,color:"lilac",art:"curve",
 desc:"Reconnaître un trinôme et ses trois formes.",intro:"Un terme en x² change la forme de la courbe. Le même trinôme peut s’écrire de plusieurs façons, selon l’information que tu veux lire.",
 formula:"f(x) = ax² + bx + c",condition:"a, b et c sont réels et a ≠ 0.",memo:"La forme développée donne les coefficients. La forme canonique donne le sommet. Une forme factorisée en facteurs du premier degré donne les racines réelles, lorsqu’elles existent.",
 method:["Range les termes selon leur degré : x², puis x, puis le terme constant.","Lis les coefficients avec leur signe. Un terme absent a pour coefficient 0.","Pour calculer une image, remplace chaque x par la valeur entre parenthèses."],
 trap:"Dans −x², on calcule le carré avant d’appliquer le signe moins. Ainsi −(−3)² = −9, tandis que (−3)² = 9.",
 examples:[
 ["Lire les coefficients","f(x) = 7 − 3x² + x",["Réordonne : f(x) = −3x² + x + 7.","Le coefficient de x est 1, même si le 1 est sous-entendu."],"a = −3, b = 1, c = 7"],
 ["Un terme absent","g(x) = 2x² − 8",["Écris g(x) = 2x² + 0x − 8.","Le terme en x² suffit à garantir le degré 2."],"a = 2, b = 0, c = −8"],
 ["Calculer une image","f(x) = x² − 3x + 2, pour x = −2",["Remplace : f(−2) = (−2)² − 3 × (−2) + 2.","Calcule : 4 + 6 + 2 = 12."],"f(−2) = 12"],
 ["Relier les trois écritures","x² − 4x + 3",["Développe (x − 2)² − 1 : x² − 4x + 4 − 1.","Développe (x − 1)(x − 3) : x² − 3x − x + 3.","Les deux donnent le même polynôme."],"x² − 4x + 3 = (x − 2)² − 1 = (x − 1)(x − 3)"]
 ],quiz:[
 ["Dans 4 − x², combien vaut b ?",["4","−1","0"],2,"L’expression s’écrit −x² + 0x + 4. b est le coefficient de x."],
 ["Si f(x) = 2x² − x, combien vaut f(−2) ?",["6","10","−6"],1,"2 × (−2)² − (−2) = 8 + 2 = 10."]]
},
{
 id:"canonique",title:"La forme canonique",group:2,color:"sand",art:"vertex",
 desc:"Faire apparaître le sommet d’une parabole.",intro:"La forme canonique rassemble le terme en x² et le terme en x dans un carré. Elle permet de lire la position du sommet et la valeur extrême de la fonction.",
 formula:"f(x) = a(x − α)² + β",condition:"α = −b/(2a) et β = f(α), pour a ≠ 0.",memo:"Le sommet est S(α ; β). Dans (x + 3)², réécris x + 3 comme x − (−3) pour lire α = −3.",
 method:["Identifie a et b dans la forme développée.","Calcule α = −b/(2a), puis β en remplaçant x par α dans f.","Réécris avec le même coefficient a devant le carré."],
 trap:"Dans 2(x − 3)² + 1, le carré porte sur toute la parenthèse. Le coefficient 2 reste à l’extérieur.",
 examples:[
 ["Compléter le carré","x² + 6x + 5",["On reconnaît (x + 3)² = x² + 6x + 9.","Retire les 4 ajoutés en trop : x² + 6x + 5 = (x + 3)² − 4."],"S(−3 ; −4)"],
 ["Avec un coefficient","2x² − 8x + 5",["α = 8/(2 × 2) = 2.","β = 2 × 2² − 8 × 2 + 5 = −3."],"f(x) = 2(x − 2)² − 3"],
 ["Lire directement le sommet","−2(x + 1)² + 7",["Le carré s’annule pour x = −1.","Comme −2 est négatif, on soustrait une quantité positive ou nulle à 7."],"Maximum 7, atteint en x = −1"],
 ["Retrouver la forme développée","3(x − 2)² + 1",["Développe le carré : x² − 4x + 4.","Multiplie par 3 puis ajoute 1 : 3x² − 12x + 12 + 1."],"f(x) = 3x² − 12x + 13"]
 ],quiz:[
 ["Quel est le sommet de 2(x + 4)² − 1 ?",["S(4 ; −1)","S(−4 ; −1)","S(−4 ; 1)"],1,"x + 4 s’annule en −4. La fonction y vaut −1."],
 ["Écris x² − 6x + 5 sous forme canonique.",["(x − 3)² − 4","(x − 3)² + 5","(x + 3)² − 4"],0,"(x − 3)² donne x² − 6x + 9. Il faut retrancher 4."]]
},
{
 id:"discriminant",title:"Le discriminant et les racines",group:2,color:"rose",art:"delta",
 desc:"Résoudre une équation du second degré.",intro:"Une racine est une valeur de x pour laquelle f(x) vaut zéro. Le discriminant indique combien de fois la parabole rencontre l’axe horizontal.",
 formula:"Δ = b² − 4ac",condition:"Pour résoudre ax² + bx + c = 0 dans ℝ, avec a ≠ 0.",memo:"Si Δ > 0, les racines sont (−b − √Δ)/(2a) et (−b + √Δ)/(2a). Si Δ = 0, la racine double est −b/(2a). Si Δ < 0, il n’y a aucune racine réelle.",
 method:["Ramène tous les termes dans un seul membre pour obtenir 0 dans l’autre.","Relève a, b et c avec leurs signes. Calcule Δ.","Choisis la formule selon le signe de Δ, puis simplifie les résultats."],
 trap:"Le dénominateur 2a divise tout le numérateur. À la calculatrice, saisis les parenthèses autour de chacun des deux blocs.",
 examples:[
 ["Deux racines distinctes","x² − 5x + 6 = 0",["Δ = (−5)² − 4 × 1 × 6 = 1.","Les racines sont (5 − 1)/2 = 2 et (5 + 1)/2 = 3."],"S = {2 ; 3}"],
 ["Une racine double","4x² + 4x + 1 = 0",["Δ = 4² − 4 × 4 × 1 = 0.","Calcule −b/(2a) = −4/8."],"S = {−1/2}"],
 ["Aucune racine réelle","2x² + x + 3 = 0",["Δ = 1² − 4 × 2 × 3 = −23.","Le discriminant est négatif : la parabole ne touche pas l’axe horizontal."],"S = ∅ dans ℝ"],
 ["Garder une valeur exacte","x² − 2x − 1 = 0",["Δ = 4 + 4 = 8 et √8 = 2√2.","Les racines sont (2 ± 2√2)/2."],"S = {1 − √2 ; 1 + √2}"]
 ],quiz:[
 ["Combien de racines réelles a x² + 2x + 5 ?",["Deux","Une","Aucune"],2,"Δ = 2² − 4 × 1 × 5 = −16, donc il n’y a aucune racine réelle."],
 ["Quelle est la racine double de x² − 8x + 16 ?",["−4","4","8"],1,"Δ = 0 et −b/(2a) = 8/2 = 4."]]
},
{
 id:"factorisee",title:"La forme factorisée",group:2,color:"sage",art:"factors",
 desc:"Transformer une somme en produit de facteurs.",intro:"Un produit vaut zéro dès qu’un de ses facteurs vaut zéro. L’écriture factorisée est donc pratique pour résoudre une équation et préparer un tableau de signes.",
 formula:"f(x) = a(x − x₁)(x − x₂)",condition:"Si x₁ et x₂ sont les deux racines du trinôme.",memo:"Avec une racine double r, la forme devient a(x − r)². Sans racine réelle, le trinôme ne se factorise pas en facteurs réels du premier degré.",
 method:["Cherche d’abord un facteur commun ou une identité remarquable.","Si rien ne se voit, calcule les racines avec le discriminant.","Place chaque racine dans un facteur (x − racine) et conserve a."],
 trap:"Une racine égale à −2 donne le facteur (x + 2). Pense aussi au coefficient de x² : en l’oubliant, tu changes le polynôme.",
 examples:[
 ["Un facteur commun","3x² − 12x",["Observe que 3x divise les deux termes.","Sors 3x : il reste x − 4.","Le produit est nul pour x = 0 ou x = 4."],"3x² − 12x = 3x(x − 4)"],
 ["Une différence de carrés","x² − 25",["Reconnais x² − 5².","Applique A² − B² = (A − B)(A + B)."],"x² − 25 = (x − 5)(x + 5)"],
 ["À partir des racines","2x² − 2x − 4",["Les racines sont −1 et 2 : vérifie en les remplaçant.","Garde le coefficient dominant 2 devant les facteurs."],"2x² − 2x − 4 = 2(x + 1)(x − 2)"],
 ["Avec une racine double","9x² − 12x + 4",["Reconnais (3x)² − 2 × 3x × 2 + 2².","Applique l’identité (A − B)². La racine est 2/3."],"9x² − 12x + 4 = (3x − 2)²"]
 ],quiz:[
 ["Factorise x² − 9.",["(x − 3)²","(x − 9)(x + 9)","(x − 3)(x + 3)"],2,"9 = 3². Applique la différence de deux carrés."],
 ["Avec a = −2 et les racines 1 et 5, quel est f(x) ?",["−2(x − 1)(x − 5)","(x − 1)(x − 5)","−2(x + 1)(x + 5)"],0,"Le coefficient −2 reste devant le produit. Chaque racine donne un facteur (x − racine)."]]
},
{
 id:"signe",title:"Le signe du trinôme",group:2,color:"peach",art:"sign",
 desc:"Résoudre les inéquations du second degré.",intro:"Pour savoir où un trinôme est positif, repère d’abord ses zéros. Ils découpent la droite en intervalles sur lesquels le signe reste constant.",
 formula:"Si r < s : f(x) = a(x − r)(x − s)",condition:"À l’extérieur des racines, f a le signe de a. Entre elles, son signe est opposé.",memo:"Avec Δ = 0, f a le signe de a partout sauf à la racine double, où f vaut 0. Avec Δ < 0, f a strictement le signe de a sur ℝ.",
 method:["Ramène l’inéquation à une comparaison avec zéro.","Calcule et classe les racines. Place-les sur une droite.","Choisis les intervalles du signe demandé. Inclus les zéros seulement pour ≤ ou ≥."],
 trap:"Un tableau de signes se lit de gauche à droite. Classe les racines par valeur croissante, même si les formules les ont données dans l’ordre inverse.",
 examples:[
 ["Entre deux racines","(x − 1)(x − 4) < 0",["Les racines sont 1 et 4 et a = 1.","Entre 1 et 4, le premier facteur est positif et le second négatif.","L’inégalité est stricte : exclus les deux bornes."],"S = ]1 ; 4["],
 ["Un coefficient négatif","−2(x + 1)(x − 3) ≥ 0",["Les racines sont −1 et 3.","Le signe est négatif à l’extérieur et positif entre les racines.","Le signe ≥ autorise les deux zéros."],"S = [−1 ; 3]"],
 ["À l’extérieur","x² − 9 ≥ 0",["Factorise : (x − 3)(x + 3).","Le coefficient dominant est positif. Le trinôme est positif à l’extérieur de −3 et 3.","Ajoute les deux racines."],"S = ]−∞ ; −3] ∪ [3 ; +∞["],
 ["Un carré et un signe strict","(x − 2)² > 0",["Un carré est toujours positif ou nul.","Il vaut zéro uniquement pour x = 2. Écarte cette valeur."],"S = ]−∞ ; 2[ ∪ ]2 ; +∞["]
 ],quiz:[
 ["Quand (x + 2)(x − 1) ≤ 0 est-elle vraie ?",["[−2 ; 1]","]−2 ; 1[","[1 ; +∞["],0,"Le produit est négatif entre ses racines et nul aux bornes. ≤ inclut les bornes."],
 ["Quel est le signe de −x² − 1 sur ℝ ?",["Toujours positif","Toujours négatif","Variable"],1,"Comme x² ≥ 0, −x² − 1 ≤ −1 pour tout réel x."]]
},
{
 id:"variations",title:"Paraboles et variations",group:2,color:"lilac",art:"hill",
 desc:"Lire une courbe et résoudre un problème d’optimum.",intro:"Le sommet sépare les deux branches de la parabole. Connaître son abscisse et le signe de a suffit pour décrire les variations de la fonction.",
 formula:"S(α ; β) avec α = −b/(2a) et β = f(α)",condition:"La droite x = α est l’axe de symétrie.",memo:"Si a > 0, f décroît jusqu’à α puis croît : β est le minimum sur ℝ. Si a < 0, f croît puis décroît : β est le maximum sur ℝ.",
 method:["Repère le signe de a pour savoir vers où s’ouvre la parabole.","Trouve le sommet et indique le sens de variation de chaque côté.","Sur un intervalle fermé, compare les valeurs aux bornes et au sommet si celui-ci appartient à l’intervalle."],
 trap:"Pour un problème concret, vérifie le domaine autorisé. Le sommet peut se situer en dehors de l’intervalle où x a un sens.",
 examples:[
 ["Décrire les variations","f(x) = (x − 3)² + 2",["La parabole s’ouvre vers le haut et son sommet est (3 ; 2).","f décroît sur ]−∞ ; 3] puis croît sur [3 ; +∞[."],"Minimum 2, atteint pour x = 3"],
 ["Utiliser la symétrie","f(x) = −(x − 2)² + 9",["L’axe est x = 2. Les nombres 0 et 4 sont à la même distance de cet axe.","Calcule f(0) = −4 + 9 = 5. La symétrie donne f(4) = 5."],"f(0) = f(4) = 5"],
 ["Une aire maximale","Un rectangle de périmètre 20 cm",["Si un côté mesure x cm, l’autre mesure 10 − x cm, avec 0 < x < 10.","Son aire est A(x) = x(10 − x) = −(x − 5)² + 25.","Le sommet est dans le domaine. À x = 5, le rectangle est un carré."],"Aire maximale : 25 cm²"],
 ["Un sommet hors du domaine","f(x) = (x − 5)², sur [0 ; 2]",["Le sommet a pour abscisse 5, hors de l’intervalle.","Sur [0 ; 2], f décroît : f(0) = 25 et f(2) = 9."],"Sur [0 ; 2], minimum 9 et maximum 25"]
 ],quiz:[
 ["Quel est le maximum de −3(x − 1)² + 8 sur ℝ ?",["1","3","8"],2,"Le carré est au minimum égal à 0, en x = 1. Le maximum vaut donc 8."],
 ["Où f(x) = x² + 4x est-elle croissante ?",["[−2 ; +∞[","]−∞ ; −2]","[2 ; +∞[ seulement"],0,"La parabole s’ouvre vers le haut et α = −4/2 = −2. Elle croît à droite du sommet."]]
}
];
