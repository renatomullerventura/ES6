#ES6 javascript

##Iniciando
instale o nodejs
configure ele com npm init

instale o babel
npm install babel-cli babel-preset-es2015 --save-dev
--save é para os dados serem criados nos arquivos de configuração JSON
-dev é para dizer que será de desenvolvimento

após isso feito, entre no package.json e insira um "babel": "babel src --out-file js/main.js" dentro do scripts
isso serve para dizer que quando vc digitar babel, o sistema vai executar o comando e o resultado será jogado dentro o --out-file arquivo js/main.js
o -w é usado para o babel observar o arquivo, toda vez que o arquivo for alterado ele irá compilar

e crie o arquivo .babel
$ echo '{ "presets": ["es2015"]}' > .babelrc
