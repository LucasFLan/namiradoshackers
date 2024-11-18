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
      feedback: "Atente-se, alta chance ser ser golpe, verifique se você realmente participou de algum sorteio ultimamente, nunca passe seus dados pessoais para desconhecidos."
    },
    {
      image: "/img/email.png",
      content: "Recebi um email suspeito, dizendo que alguém tentou acessar minha conta e pedindo para redefinir minha senha pelo link. Porém, percebo que o endereço de email não é correspondente ao oficial, além disso não tenho conta nesse site, portanto excluo e ignoro o email, SEM CLICAR no link",
      answer: "safe",
      feedback: "Correto! Muita atenção a esse tipo de email com links, nunca clique diretamente no link, além disso, verifique o endereço de email do remetente para comprovar que é oficial"
    },
    {
      image: "/img/holi.jpg",
      content: "Hoje é dia de festa com os amigos! É seguro compartilhar a localização dessa festa nas redes sociais",
      answer: "danger",
      feedback: "Cuidado! Ao expor esse tipo de informação sensível, como a sua localização, você fica vulnerável a ataques e crimes"
    },
    {
      image: "/img/crianca.png",
      content: "Postar fotos de crianças nas redes sociais",
      answer: "danger",
      feedback: "Atenção! Ao compartilhar fotos de crianças nas redes sociais, você torna a imagem dessa criança vulnerável a crimes, então cuidado ao expor!"
    },
    {
      image: "/img/selfie.png",
      content: "Antes de postar uma foto, verifico se não houve nenhum vazamento de dados pessoais, como vazamento do rg, cpf, endereço, entre outros dados sensíveis.",
      answer: "safe",
      feedback: "Correto! Antes de fazer qualquer postagem, verifique se não houve nenhum vazamento que possa lhe comprometer"
    },
    {
      image: "/img/golpe.jpeg",
      content: "Investimento rápido, retorno imediato do valor investido, você apenas deve realizar o Pix",
      answer: "danger",
      feedback: "MUITA ATENÇÃO! Esse tipo de golpe é muito comum em contas que foram hackeadas, portanto muito cuidado ao ver esse tipo de postagem."
    },
    {
      image: "/img/crianca_escola.png",
      content: "Postar uma foto do meu filho na escola, com o uniforme visível",
      answer: "danger",
      feedback: "ATENÇÃO! Ao compartilhar uma foto do seu filho com o uniforme da escola, pode expor a localização e rotina da criança, colocando-a em risco"
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
    setTimeout(loadPost, 3300);
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