<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Moderno</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav class="navbar">
            <div class="logo">DevSite</div>
            <ul class="nav-links">
                <li><a href="#home">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button id="theme-toggle" class="btn-theme">🌓 Modo</button>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Criando Experiências Digitais Incríveis</h1>
            <p>Desenvolvimento web moderno, rápido e focado em resultados.</p>
            <a href="#servicos" class="btn-primary">Saiba Mais</a>
        </div>
    </section>

    <section id="servicos" class="services">
        <h2>Nossos Serviços</h2>
        <div class="card-container">
            <div class="card">
                <h3>Web Design</h3>
                <p>Interfaces atraentes, intuitivas e personalizadas para a sua marca.</p>
            </div>
            <div class="card">
                <h3>SEO</h3>
                <p>Otimização para que seu site apareça nos primeiros resultados do Google.</p>
            </div>
            <div class="card">
                <h3>Performance</h3>
                <p>Código limpo e otimizado para um carregamento ultra rápido.</p>
            </div>
        </div>
    </section>

    <section id="contato" class="contact">
        <h2>Entre em Contato</h2>
        <form id="contact-form">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="message">Mensagem:</label>
                <textarea id="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn-submit">Enviar Mensagem</button>
        </form>
        <div id="form-feedback" class="hidden"></div>
    </section>

    <footer>
        <p>&copy; 2026 DevSite. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
