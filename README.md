#ES6 javascript

##Iniciando
instale o nodejs
configure ele com npm init

instale o babel
npm install babel-cli babel-preset-es2015 --save-dev
--save é para os dados serem criados nos arquivos de configuração JSON
-dev é para dizer que será de desenvolvimento

após isso feito, entre no package.json e insira um "babel": "babel src --out-file js/main.js" dentro do scripts

e crie o arquivo .babel
$ echo '{ "presets": ["es2015"]}' > .babelrc