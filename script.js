const posts = [
    {
      image: "/img/sorteio-iphone.jpg",
      content: "🚨 PROMOÇÃO! Ganhe um iPhone 14 grátis! Clique no link e preencha seus dados: www.promo-suspeita.com",
      answer: "danger",
      feedback: "Cuidado! Essa postagem é phishing, tentando roubar informações pessoais."
    },
    {
      image: "/img/sorteio-diarias.jpg",
      content: "Recebi uma mensagem no WhatsApp dizendo que ganhei um sorteio. Eles pedem meus dados bancários para depósito. É seguro enviar?",
      answer: "danger",
      feedback: "Atente-se, alta chance ser ser golpe, verifique se você realmente participou de algum sorteio ultimamente, NUNCA passe seus dados pessoais para desconhecidos."
    },
    {
      image: "/img/email.png",
      content: "Recebi um email suspeito, dizendo que alguém tentou acessar minha conta e pedindo para redefinir minha senha pelo link. Porém, percebo que o endereço de email não é correspondente ao oficial, além disso não tenho conta nesse site, portanto excluo e ignoro o email, SEM CLICAR no link",
      answer: "safe",
      feedback: "Muita atenção a esse tipo de email com links, NUNCA clique diretamente no link, além disso, verifique o endereço de email do remetente para comprovar que é oficial"
    },
    {
      image: "/img/holi.jpg",
      content: "Hoje é dia de festa com os amigos! É seguro compartilhar a localização dessa festa nas redes sociais",
      answer: "danger",
      feedback: "Cuidado! Ao expor esse tipo de informação sensível, como a sua localização, você fica vulnerável a ataques e crimes"
    },
    {
      image: "/img/criança_jpg.webp",
      content: "Postar fotos de crianças nas redes sociais. Expondo a criança para hackers e pedófilos, colocando sua segurança em risco.",
      answer: "danger",
      feedback: "Atenção! Ao compartilhar fotos de crianças nas redes sociais, você torna a imagem dessa criança vulnerável a crimes, além disso a imagem da criança pode ser facilmente utilizada para fins de exploração comercial ou criação de perfis falsos. então cuidado ao expor!"
    },
    {
      image: "/img/selfie.png",
      content: "Antes de postar uma foto, VERIFICO se não houve nenhum vazamento de dados pessoais, como vazamento do rg, cpf, endereço, entre outros dados sensíveis.",
      answer: "safe",
      feedback: "Antes de fazer qualquer postagem, verifique se não houve nenhum vazamento que possa lhe comprometer"
    },
    {
      image: "/img/golpe.jpeg",
      content: "Investimento rápido, retorno imediato do valor investido, você apenas deve realizar o Pix",
      answer: "danger",
      feedback: "MUITA ATENÇÃO! Esse tipo de golpe é muito comum em contas que foram hackeadas, portanto muito cuidado ao ver esse tipo de postagem."
    },
    {
      image: "/img/crianca_escola.png",
      content: "Postar uma foto do meu filho na escola, com o UNIFORME VISÍVEL",
      answer: "danger",
      feedback: "ATENÇÃO! Ao compartilhar uma foto do seu filho com o uniforme da escola, pode expor a localização e rotina da criança, colocando-a em risco"
    },
    {
      image: "/img/spam.jpeg",
      content: "Você recebe a seguinte mensagem: Seu celular está vulnerável! Clique aqui para instalar a atualização de segurança urgente. Você NÃO clica pois identifica uma possível suspeita:",
      answer: "safe",
      feedback: "Cuidado! Este tipo de anúncio pode redirecionar a vítima para o download de arquivos NÃO SEGUROS disfarçado de atualização, permitindo que hackers tenham acesso aos dados da vítima"
    },
    {
      image: "/img/spam-2.png",
      content: "Você recebe um email enviado por uma casa de aposta DIRECIONANDO para cadastrar e depositar dinheiro na platarforma e em seguida começar a jogar",
      answer: "danger",
      feedback: "ATENÇÃO! Cuidado ao receber esses supostos link's pois podem direcionar para uma página falsa que simula um site, onde os usuários inserem seus dados bancários, como senhas, números de conta e dados do cartão de crédito."
    },
  ];

  let currentPost = 0;
  let score = 0;

  function loadPost() {
    if (currentPost < posts.length) {
      const post = posts[currentPost];
      document.getElementById("post-image").src = post.image;
      document.getElementById("post-content").innerText = post.content;
      document.getElementById("feedback").style.display = "none";
    } else {
      endGame();
    }
  }

  function evaluatePost(choice) {
    const post = posts[currentPost];
    const feedbackElement = document.getElementById("feedback");
    if (choice === post.answer) {
      feedbackElement.className = "feedback correct";
      feedbackElement.innerText = "Correto! " + post.feedback;
      score += 10;
    } else {
      feedbackElement.className = "feedback incorrect";
      feedbackElement.innerText = "Errado! " + post.feedback;
    }
    feedbackElement.style.display = "block";
    document.getElementById("score").innerText = `Pontuação: ${score}`;
    currentPost++;
    setTimeout(loadPost, 6000);
  }

  function endGame() {
    document.querySelector(".container").innerHTML = `
      <h1>Fim de Jogo</h1>
      <p>Sua pontuação final: ${score}</p>
      <p>Obrigado por jogar e aprender sobre segurança nas redes sociais!</p>
    `;
  }

  // Carrega o primeiro post
  loadPost();