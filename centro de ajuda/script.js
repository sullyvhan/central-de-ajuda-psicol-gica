
 
 
var $ = function (seletor) {
  return document.querySelector(seletor);
};
 
 
 
/* lista dos transtornos */
var transtornos = [
  {
    nome: "Depressão",
    oque: "Tristeza profunda ou perda de interesse que dura semanas e atrapalha a vida.",
    sinais: "Cansaço, sono ou apetite alterados, dificuldade de concentração, sentimento de vazio ou de culpa, isolamento.",
    fatores: "Predisposição biológica, eventos estressantes, perdas, histórico familiar, falta de apoio social.",
    impactos: "Estudos, trabalho, relações e tarefas simples ficam muito mais pesados.",
    ajuda: "Rotina de sono, contato com pessoas de confiança, movimento leve e tratamento profissional.",
    urgente: "Pensamentos de morrer ou de se machucar, ou incapacidade de cuidar de si."
  },
  {
    nome: "Transtornos de ansiedade",
    oque: "Preocupação e medo intensos, difíceis de controlar e desproporcionais à situação.",
    sinais: "Tensão, coração acelerado, inquietação, pensamentos repetitivos, evitação de situações.",
    fatores: "Temperamento, estresse prolongado, experiências difíceis, histórico familiar.",
    impactos: "Insônia, adiar tarefas, dificuldade em provas, reuniões e encontros.",
    ajuda: "Respiração lenta, pausas, reduzir excesso de cafeína, falar sobre o que preocupa, terapia.",
    urgente: "Sintomas que impedem a rotina por dias, ou pensamentos de se machucar."
  },
  {
    nome: "Transtorno do pânico",
    oque: "Crises súbitas de medo intenso, com sintomas físicos, que costumam passar em poucos minutos.",
    sinais: "Palpitação, falta de ar, tontura, tremores, medo de perder o controle ou de morrer.",
    fatores: "Predisposição, estresse, períodos de muita pressão, outros quadros de ansiedade.",
    impactos: "Medo de novas crises pode levar a evitar lugares e atividades.",
    ajuda: "Lembrar que a crise é temporária, respirar devagar, buscar acompanhamento.",
    urgente: "Dor no peito ou falta de ar sem explicação clara: procure atendimento, pois só um profissional diferencia."
  },
  {
    nome: "Transtorno bipolar",
    oque: "Alternância entre fases de humor muito elevado ou irritável e fases depressivas.",
    sinais: "Em uma fase: pouco sono com muita energia, ideias aceleradas. Em outra: tristeza e desânimo intensos.",
    fatores: "Forte componente biológico e hereditário, somado a estresse e privação de sono.",
    impactos: "Oscilações afetam trabalho, dinheiro, relações e rotina.",
    ajuda: "Acompanhamento psiquiátrico contínuo, rotina regular de sono, rede de apoio.",
    urgente: "Comportamento arriscado, perda de contato com a realidade ou pensamentos de morte."
  },
  {
    nome: "Estresse pós-traumático (TEPT)",
    oque: "Reação persistente após viver ou presenciar um evento muito ameaçador ou violento.",
    sinais: "Lembranças invasivas, pesadelos, sobressalto, evitar lembranças, sensação de perigo constante.",
    fatores: "Gravidade do evento, falta de apoio depois, traumas anteriores.",
    impactos: "Sono ruim, irritabilidade, dificuldade de confiar e de relaxar.",
    ajuda: "Psicoterapia especializada em trauma, ambientes seguros, apoio de pessoas próximas.",
    urgente: "Flashbacks que desorganizam o dia, risco de se machucar ou de violência atual."
  },
  {
    nome: "Transtornos alimentares",
    oque: "Padrões de alimentação e relação com o corpo que prejudicam a saúde física e emocional.",
    sinais: "Preocupação intensa com peso e comida, comer escondido, culpa após comer, mudanças bruscas de hábitos.",
    fatores: "Fatores biológicos, psicológicos e sociais, como pressão estética e histórico de ansiedade.",
    impactos: "Afeta energia, convívio social, humor e saúde do corpo.",
    ajuda: "Equipe com médico, nutricionista e psicólogo. Evite dietas restritivas por conta própria.",
    urgente: "Desmaios, fraqueza intensa, dor no peito ou pensamentos de se machucar."
  },
  {
    nome: "Sofrimento intenso e pensamentos suicidas",
    oque: "Dor emocional tão grande que a pessoa sente não aguentar. Pensar nisso é um sinal de que é preciso cuidado e apoio, não de fraqueza.",
    sinais: "Desesperança, sensação de ser um peso, isolamento, falar sobre morrer.",
    fatores: "Diversos: sofrimento prolongado, perdas, violência, transtornos mentais, isolamento. Nenhum deles é causa única.",
    impactos: "A dor pode parecer eterna, mas costuma mudar com apoio e tratamento.",
    ajuda: "Falar com alguém agora, afastar-se de meios de se machucar, buscar ajuda profissional.",
    urgente: "Se há pensamento de se machucar ou plano: ligue 192 ou 188 agora e não fique sozinho(a)."
  }
];
$("#cl").innerHTML = transtornos.map(function (x) {
  return "<details>" +
    "<summary><svg class='ic' aria-hidden='true'><use href='#i-star'/></svg>" + x.nome + "</summary>" +
    "<p><b>O que é:</b> " + x.oque + "</p>" +
    "<p><b>Possíveis sinais:</b> " + x.sinais + "</p>" +
    "<p><b>Causas e fatores de risco:</b> " + x.fatores + "</p>" +
    "<p><b>Impactos no dia a dia:</b> " + x.impactos + "</p>" +
    "<p><b>O que pode ajudar:</b> " + x.ajuda + " Isso complementa, mas não substitui o tratamento.</p>" +
    "<p><b>Quando buscar ajuda urgente:</b> " + x.urgente + "</p>" +
    "<p class='small mut'><b>Como buscar ajuda:</b> UBS, CAPS, psicólogo ou psiquiatra. " +
    "<b>Contatos:</b> CVV 188 (apoio emocional) · SAMU 192 (emergência) · <a href='#ajuda'>ver mais</a>.</p>" +
    "</details>";
}).join("");
 
 
/* ----------imagens---------- */
 
/* imagens */
var imagens = {
  inicio: "imagens/inicio.jpg",
  transtornos: "imagens/transtornos.jpg",
  conselho: "imagens/conselho.jpg",
  conquistas: "imagens/conquistas.jpg",
  ajuda: "imagens/ajuda.jpg"
};
 
/* chama a imagem*/
function carregarImagens() {
  document.querySelectorAll("img[data-img]").forEach(function (img) {
    img.onerror = function () { img.style.display = "none"; };
    img.src = imagens[img.dataset.img];
  });
}
 
carregarImagens();
 
 
 
 
/* ----------trocar de página---------- */
 
/* usa os noomes com # para alternaar entre as paginas */
var paginas = ["inicio", "transtornos", "conselhos", "conquistas", "ajuda"];
 
function mostrarPagina() {
 
  /* pega o # do endereço e tira o símbolo se n vai  pro inicio */
  var atual = (location.hash || "#inicio").slice(1);
  if (paginas.indexOf(atual) < 0) atual = "inicio";
 
  /* só a página atual ganha a classe "on" ai o css faz aparecer */
  paginas.forEach(function (p) {
    $("#" + p).classList.toggle("on", p === atual);
  });
 
  /* deixa o link da página atual destacado no menu */
  document.querySelectorAll("#nav a").forEach(function (a) {
    if (a.getAttribute("href") === "#" + atual) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  });
 
  /* fecha o menu do celular e volta pra cima */
  abrirMenu(false);
  scrollTo(0, 0);
}
 
/* botão para o celular */
function abrirMenu(aberto) {
  $("#menu").setAttribute("aria-expanded", aberto ? "true" : "false");
  $("#menu").textContent = aberto ? "✕" : "☰";
}
 
/* roda toda vez que o # muda*/
addEventListener("hashchange", mostrarPagina);
mostrarPagina();
 
/* botão do menu */
$("#menu").onclick = function () {
  var estaAberto = this.getAttribute("aria-expanded") === "true";
  abrirMenu(!estaAberto);
};
 
 
/* ----------banner---------- */
 
/* faz o banner sumir com o x*/
$("#bx").onclick = function () {
  $("#banner").style.display = "none";
};
 
 
/* ----------tema claro e escuro---------- */
 
/* deixa o botão de trocar o tema funcional*/
function atualizarIconeTema() {
  $("#th").textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";
}
atualizarIconeTema();
 
$("#th").onclick = function () {
  /* tema contrário */
  var novo = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
 
  /* troca as cores */
  document.documentElement.dataset.theme = novo;
 
  /* salva a escolha pra lembrar depois */
  try { localStorage.setItem("tema", novo); } catch (e) {}
 
  atualizarIconeTema();
};
 
 
/* ----------tela inicial (nome e data)---------- */
 
/* escreve a saudação no títutlo com o  nome da pessoa */
function saudar(nome) {
  $("#hi").textContent = nome
    ? "Que bom que você está aqui, " + nome + "."
    : "Que bom que você está aqui.";
 
  var recado = $("#recado");
  if (recado) recado.remove();
}
 
/* esconde a tela inicial */
function fecharTelaInicial() {
  $("#ov").style.display = "none";
}
 
/*  guarda o nome só enquanto a aba tá aberta.
 */
var nomeSalvo = null;
try { nomeSalvo = sessionStorage.getItem("nome"); } catch (e) {}
if (nomeSalvo !== null) {
  saudar(nomeSalvo);
  fecharTelaInicial();
}
 
/* botão entrar sem personalizar*/
$("#skip").onclick = function () {
  try { sessionStorage.setItem("nome", ""); } catch (e) {}
  saudar("");
  fecharTelaInicial();
};
 
/* botão continuar ve o nome e a data de nacimento aanstes de liberar o acesso*/
$("#go").onclick = function () {
  var nome = $("#nm").value.trim();   /* trim tira os espaços das pontas */
  var data = $("#bd").value;          /* 2008-05-21 */
  var erro = "";                      /* vazio deu tudo certo */
 
  /* tira o vermelho dos campos  */
  $("#nm").classList.remove("bad");
  $("#bd").classList.remove("bad");
 
  /* separa  data dia e ano*/
  var partes = data.split("-");
  var nascimento = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
  var hoje = new Date();
 
  if (!nome) {
    erro = "Escreva um nome ou apelido.";
    $("#nm").classList.add("bad");
  } else if (!data || isNaN(nascimento) || nascimento > hoje || nascimento.getFullYear() < 1900) {
    erro = "Informe uma data de nascimento válida, que não seja futura.";
    $("#bd").classList.add("bad");
  }
 
  $("#oe").textContent = erro;
  if (erro) return;   /* se deu erro */
 
  /* idade = ano de hoje - ano que nasceu */
  var idade = hoje.getFullYear() - nascimento.getFullYear();
 
  /* se o aniversário ainda não chegou esse ano tira 1 */
  if (hoje < new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate())) {
    idade--;
  }
 
  try { sessionStorage.setItem("nome", nome); } catch (e) {}
  saudar(nome);
 
  /* se for menor de 18 coloca um recado depois do título */
  if (idade < 18) {
    $("#hi").insertAdjacentHTML(
      "afterend",
      "<p class='mut' id='recado'>Se possível, converse com um adulto de confiança sobre o que você sente. Você merece apoio.</p>"
    );
  }
 
  $("#bd").value = "";   /* faz com que a data n fique armazenada em lugar nenhumm*/
  fecharTelaInicial();
};
 
/* enter no nome pula pra data */
$("#nm").addEventListener("keydown", function (e) {
  if (e.key === "Enter") $("#bd").focus();
});
 
/* enter na data pula pra proxima ppagina */
$("#bd").addEventListener("keydown", function (e) {
  if (e.key === "Enter") $("#go").click();
});
 
/* abre a tela de cadastro de novo */
var botaoCorrigir = document.createElement("button");
botaoCorrigir.className = "sos";
botaoCorrigir.style.cssText = "background:none;cursor:pointer";
botaoCorrigir.textContent = "Corrigir dados";
botaoCorrigir.onclick = function () {
  try { sessionStorage.removeItem("nome"); } catch (e) {}
  $("#oe").textContent = "";
  $("#ov").style.display = "flex";
  $("#nm").focus();
};
 
/* coloca o botão antes do botão de tema */
document.querySelector("header").insertBefore(botaoCorrigir, $("#th"));
 
 
/* --------conselhos---------- */
 
/* vc escolhe o assunto e ele te da um conselho sobre aquele assunto*/
var conselhos = {
  "Depressão": [
    "Escolha uma única coisa minúscula para hoje, como lavar o rosto ou abrir a janela. Se ela bastar, já foi um dia de cuidado.",
    "Dias pesados distorcem o que pensamos. Tente não decidir nada grande agora, e deixe as conclusões para um momento mais leve.",
    "Mande uma mensagem curta a alguém de confiança, mesmo que seja só “hoje está difícil”. Você não precisa ter resposta pronta.",
    "Se essa tristeza dura semanas, vale conversar com um profissional na UBS ou em um CAPS. Isso é cuidado, não exagero.",
    "Tente ter um pouco de luz do dia e uma refeição simples. Não vai resolver tudo, mas dá ao corpo um pouco de apoio."
  ],
  "Ansiedade": [
    "Inspire contando até 4, segure por 2 e solte contando até 6. Repita por 2 minutos, sem pressa.",
    "Escreva o que te preocupa e separe: o que depende de você hoje e o que não depende. Comece só pelo primeiro.",
    "Olhe ao redor e nomeie 5 coisas que vê, 4 que toca e 3 que ouve. Isso ajuda a trazer a atenção ao presente.",
    "Se a preocupação toma boa parte do dia há semanas, conte isso a um profissional. Ansiedade tem tratamento.",
    "Dê uma pausa às telas e às notícias por algumas horas. Muito estímulo costuma aumentar a tensão."
  ],
  "Crises de pânico": [
    "A crise é desconfortável, mas passa. Lembre a si mesmo(a): “isso é temporário, já passou antes”.",
    "Solte o ar devagar, mais longo do que a inspiração. Soltar devagar ajuda o corpo a desacelerar.",
    "Apoie os pés no chão e pressione as mãos uma na outra. Sentir o corpo firme ajuda a recuperar a sensação de controle.",
    "Se puder, fique em um lugar calmo e peça a alguém de confiança que fique por perto até passar.",
    "Se as crises se repetem, procure avaliação médica ou psicológica. Se houver dor no peito ou falta de ar fortes, procure atendimento de urgência."
  ],
  "Baixa autoestima": [
    "Escreva uma coisa que você fez hoje, por menor que seja. Não precisa ser grande para contar.",
    "Pense no que diria a um amigo na sua situação e tente dizer algo parecido a si mesmo(a).",
    "Compare menos. Redes mostram recortes, não vidas inteiras. Se faz mal, pode silenciar algumas contas.",
    "Perceba as palavras que usa sobre você e tente trocar uma crítica por uma observação neutra.",
    "Se a autocrítica é constante e dolorosa, a terapia pode ajudar a entender de onde ela vem."
  ],
  "Solidão": [
    "Escolha uma pessoa e mande algo simples, como uma foto, um meme ou um “lembrei de você”. Contato pequeno também conecta.",
    "Estar perto de gente sem precisar conversar, como em uma biblioteca ou praça, às vezes alivia.",
    "Procure grupos ligados a algo de que você gosta, presenciais ou online moderados. Começar só observando vale.",
    "Sentir solidão não significa que há algo errado com você. É um sinal de que conexão importa.",
    "Se a solidão pesa muito, converse com o CVV (188), a qualquer hora, ou com um profissional."
  ],
  "Estresse": [
    "Escreva tudo o que está na sua cabeça e escolha só 1 ou 2 coisas para hoje. O resto pode esperar.",
    "Faça uma pausa de 5 minutos: alongue, beba água, olhe pela janela. Pausas não são perda de tempo.",
    "Veja se alguma tarefa pode ser dividida, adiada ou pedida a outra pessoa. Dizer “não consigo agora” é legítimo.",
    "Cuidar do sono costuma reduzir o estresse. Tente um horário parecido para dormir e menos telas antes.",
    "Se o estresse virou dor constante, irritação ou exaustão, vale buscar ajuda profissional."
  ],
  "Desmotivação": [
    "Combine consigo mesmo(a) fazer só 5 minutos. Se quiser parar depois, pode. Começar costuma ser a parte mais difícil.",
    "Motivação nem sempre vem antes da ação. Às vezes ela aparece depois de um pequeno começo.",
    "Escolha algo que antes você gostava e volte a ele por poucos minutos, sem pensar em desempenho.",
    "Falta de energia por muito tempo pode ter causas físicas ou emocionais. Uma consulta ajuda a investigar.",
    "Descansar sem culpa também recarrega. Às vezes o corpo está pedindo pausa, não esforço."
  ],
  "Dificuldades para tarefas cotidianas": [
    "Divida a tarefa até ficar ridiculamente pequena: em vez de “arrumar o quarto”, “pegar 3 itens do chão”.",
    "Use um temporizador de 10 minutos e pare quando tocar. Terminar o tempo já conta.",
    "Junte uma tarefa difícil com algo agradável, como música ou um podcast.",
    "Peça ajuda concreta a alguém: “pode ficar comigo enquanto eu lavo a louça?”. Fazer junto pode facilitar.",
    "Se tarefas básicas estão ficando impossíveis há semanas, isso merece atenção profissional, e não é preguiça."
  ],
  "Sentimentos de desesperança": [
    "A desesperança faz parecer que nada vai mudar, mas sentimentos intensos mudam, mesmo quando não parece. Você só precisa chegar ao próximo momento.",
    "Foque em passar as próximas horas com segurança: coma algo, beba água, fique perto de alguém.",
    "Conte a alguém, em voz alta ou por mensagem, que você está se sentindo sem esperança. Carregar isso sozinho(a) pesa mais.",
    "Você pode ligar para o CVV (188), 24 horas, para conversar com alguém agora, sem julgamento.",
    "Procure um profissional de saúde mental. Desesperança é um sintoma que costuma responder a tratamento."
  ]
};
 
var assunto = null;   /* se n tiver aassunto escolhido n mostra nada */
var usadas = {};      /* guarda quais sugestões já saíram de cada assunto, pra não repetir */
 
/* cria um botão pra cada assunto dentro de uma caixa */
var caixaAssuntos = $("#cats");
Object.keys(conselhos).forEach(function (nome) {
  var botao = document.createElement("button");
  botao.className = "chip";
  botao.textContent = nome;
  botao.setAttribute("aria-pressed", "false");
 
  botao.onclick = function () {
    assunto = nome;
    usadas[nome] = usadas[nome] || [];   /* se ainda não existe cria a lista vazia */
 
    /* deixa só esse botão marcado */
    caixaAssuntos.querySelectorAll("button").forEach(function (outro) {
      outro.setAttribute("aria-pressed", outro === botao ? "true" : "false");
    });
 
    $("#se").textContent = "";   /* apaga o erro */
  };
 
  caixaAssuntos.appendChild(botao);
});
 
/* arruma a pontuação do texto*/
var palavrasDeRisco = /suicid|me matar|quero morrer|morrer|tirar (a )?minha vida|acabar com (tudo|a minha vida)|me machucar|me cortar|automutila|n[aã]o quero mais viver|sumir para sempre/i;
 
/* mensagem de segurança, aparece no lugar do conselho se o texto tiver risco */
function mensagemDeSeguranca() {
  return "<div class='card safe'>" +
    "<h3>Sua segurança vem primeiro</h3>" +
    "<p>Sinto muito que você esteja sofrendo tanto. Você merece apoio humano agora. Ligue para o <b>CVV, 188</b> (24 horas), ou para o <b>SAMU, 192</b>, se corre risco imediato. Avise alguém de confiança e fique perto de outras pessoas. Este simulador não pode substituir esse apoio.</p>" +
    "<p><a class='btn' href='tel:188'>Ligar 188</a> <a class='btn' href='tel:192'>Ligar 192</a> <a class='btn sec' href='#ajuda'>Ver mais recursos</a></p>" +
    "</div>";
}
 
/* botão da area de conselho*/
$("#get").onclick = function () {
  var texto = $("#fl").value;
 
  /* primeiro vê se tem palavra de risco mostra a ajuda e para */
  if (palavrasDeRisco.test(texto)) {
    $("#out").innerHTML = mensagemDeSeguranca();
    return;
  }
 
  /* precisa ter escolhido um assunto */
  if (!assunto) {
    $("#se").textContent = "Escolha um assunto primeiro.";
    return;
  }
 
  var lista = conselhos[assunto];
  var jaSaiu = usadas[assunto];
 
  /* se já saíram todas   começa de novo */
  if (jaSaiu.length >= lista.length) jaSaiu = usadas[assunto] = [];
 
  /* faz uma lista só com as coisas que aindaa n sairam*/
  var faltam = [];
  lista.forEach(function (_, posicao) {
    if (jaSaiu.indexOf(posicao) < 0) faltam.push(posicao);
  });
 
  var sorteada = faltam[Math.floor(Math.random() * faltam.length)];
  jaSaiu.push(sorteada);
 
  /* aparece um agradecimento antes do  que a pessoa escreveu */
  var agradecimento = texto.trim()
    ? "<p class='mut small'>Obrigado por contar como está. Aqui vai uma sugestão sobre “" + assunto.toLowerCase() + "”:</p>"
    : "";
 
  var saida = $("#out");
  saida.innerHTML = "<div class='card' id='adv'>" +
    "<img class='bf' data-img='conselho' alt='Imagem decorativa do conselho'>" +
    agradecimento +
    "<p style='margin:0'></p>" +
    "<p class='small mut'>Sugestão geral, não é diagnóstico nem tratamento. (" + jaSaiu.length + " de " + lista.length + ")</p>" +
    "</div>";
 
 
  saida.querySelector("p:not(.small)").textContent = lista[sorteada];
 
  carregarImagens();   /* carrega a imagem do cartão novo */
};
 
/* botão "escolher outro assunto", limpa tudo e volta pro primeiro botão */
$("#rst").onclick = function () {
  assunto = null;
  $("#fl").value = "";
  $("#out").innerHTML = "";
  $("#se").textContent = "";
 
  caixaAssuntos.querySelectorAll("button").forEach(function (botao) {
    botao.setAttribute("aria-pressed", "false");
  });
 
  caixaAssuntos.firstChild.focus();
};
 
 
/* ---------conquistas---------- */
 
/* os itens ficam salvos e ficam la depois de recarregar a pagina */
var itens = [];
try {
  /* o JSON.parse transforma o texto salvo de volta em lista */
  itens = JSON.parse(localStorage.getItem("pc") || "[]");
  /* se o que tava salvo não for uma lista, começa do zero */
  if (!Array.isArray(itens)) itens = [];
} catch (e) {
  itens = [];
}
 
/* salva a list transformando ela em texto */
function salvar() {
  try { localStorage.setItem("pc", JSON.stringify(itens)); } catch (e) {}
}
 
/* mensagens que aparecem quando conclui um item */
var mensagens = [
  "Isso importa. Obrigado por cuidar de você.",
  "Um passo feito. Sem pressa para o próximo.",
  "Muito bem. E descansar também é permitido agora."
];
 
/* lista que chamo ela toda vez que algo muda */
function desenharLista() {
  var ul = $("#tl");
  ul.innerHTML = "";   /* apaga a antiga pra refazer */
 
  /* se não tem nada mostra um aviso */
  if (!itens.length) {
    ul.innerHTML = "<li><span class='mut'>Nenhum item ainda. Tudo bem começar quando quiser.</span></li>";
  }
 
  /* pra cada item cria um <li> com o texto e dois botões */
  itens.forEach(function (item, posicao) {
    var li = document.createElement("li");
    if (item.d) li.className = "d";
 
    var texto = document.createElement("span");
    texto.textContent = item.t;
 
    /* botão concluir e desfazer */
    var botaoConcluir = document.createElement("button");
    botaoConcluir.className = "btn sec";
    botaoConcluir.textContent = item.d ? "Desfazer" : "Concluir";
    botaoConcluir.setAttribute("aria-label", (item.d ? "Desfazer conclusão de " : "Concluir ") + item.t);
    botaoConcluir.onclick = function () {
      item.d = !item.d;   
      salvar();
      desenharLista();
 
      var mensagem = $("#tm");
      if (item.d) {
        /* sorteia uma mensagem e mostra com a animação */
        mensagem.textContent = mensagens[Math.floor(Math.random() * mensagens.length)];
        mensagem.hidden = false;
        mensagem.classList.remove("pop");
        void mensagem.offsetWidth;   /*  faz o navegador reiniciar a animação */
        mensagem.classList.add("pop");
      } else {
        mensagem.hidden = true;
      }
    };
 
    /* botão × que tira o item que tu  escreveu */
    var botaoRemover = document.createElement("button");
    botaoRemover.className = "ib";
    botaoRemover.textContent = "×";
    botaoRemover.setAttribute("aria-label", "Remover " + item.t);
    botaoRemover.onclick = function () {
      itens.splice(posicao, 1);   /* tira 1 item a partir disso */
      salvar();
      desenharLista();
    };
 
    li.append(texto, botaoConcluir, botaoRemover);
    ul.appendChild(li);
  });
}
 
/* adiciona item novo*/
function adicionarItem(texto) {
  texto = texto.trim();
 
  if (!texto) {
    $("#te").textContent = "Escreva algo para adicionar.";
    $("#ti").classList.add("bad");
    return;
  }
 
  $("#te").textContent = "";
  $("#ti").classList.remove("bad");
 
  itens.push({ t: texto, d: false });
  salvar();
  $("#ti").value = "";
  desenharLista();
}
 
/* botão adicionar tbm funcciona com o enter*/
$("#add").onclick = function () {
  adicionarItem($("#ti").value);
};
$("#ti").addEventListener("keydown", function (e) {
  if (e.key === "Enter") adicionarItem(this.value);
});
 
/* botões de ideia rápida */
document.querySelectorAll("[data-s]").forEach(function (botao) {
  botao.onclick = function () {
    adicionarItem(botao.dataset.s);
  };
});
 
/* botão apagar tudo*/
$("#clr").onclick = function () {
  if (itens.length && confirm("Apagar todos os itens da lista?")) {
    itens = [];
    salvar();
    desenharLista();
    $("#tm").hidden = true;
  }
};
 
desenharLista();  
 
