В даному було використано такі модулі:

    webpack-dev-server - для створення серверу відображення макета, з живим перезавантаженням браузера;
    webpack - це збирач модулів який аналізує модулі програми, створює граф залежностей, потім збирає модулі у правильному порядку до одного файлу;
    eslint -  щоб знайти та виправити проблеми у коді JavaScript;
    babel-loader: Завантажує код ES2015+ та транспілює до ES5 за допомогою Babel;
    HtmlWebpackPlugin - Плагін що створює файл HTML5 в папці dist, який містить усі пакети webpack у тілі за допомогою script тегів;
     - sass-loader: завантажувач файлів SASS/SCSS;
     - postcss-loader - пост-обробник CSS, який трансформує CSS: автоматичне додавання префіксів, перевірка дотримання     стандарту офоромлення коду і багатьма іншими!
     - css-loader - завантажувач сss що інтерпритує  сss до JavaScript та переводить @import до requier 

    MiniCssExtract - Плагін що розпаковує CSS в окремі файли. Він створює файл styles.css для файлу JS, який містить CSS.
    стандарту офоромлення коду тощо.

    CleanWebpackPlugin - плагін для видалення/очищення папки (папок) збирання;

    LodashModuleReplacementPlugin - плагін доповнює babel-plugin-lodash, ще більше скорочуючи свої вибрані збірки!
    asset module - це тип модуля, який дозволяє використовувати asset файли (шрифти, піктограми тощо) без налаштування додаткових завантажувачів. 
    - asset - автоматично вибирає між експортом URI даних та створенням окремого файлу


Над цим проектом працювали Городній Юрій та Вунтесмері Юлія.

Над першим завданням працювала Вунтесмері Юлія:

    1) Верстка шапки з верхнім меню та випадаючим меню при малій роздільнійздатності екрану;
    2) Верстка секції "People Are Talking About Fork";

Над другим завданням працював Городній Юрій:

    1) Верстка блоку "Revolutionary Editor";
    2) Верстка секцій "Here is what you get" та "Fork Subscription Pricing"

