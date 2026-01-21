// ============================================
// CLÍNICA VITÓRIA - PLANO DE CRESCIMENTO v2.0
// Interactive Dashboard Script
// ============================================

// Data - Phases/Cronograma
const phases = [
    {
        id: 'semanas-1-2',
        name: 'Fundação Digital',
        weeks: 'Semanas 1-2',
        objective: 'Criar infraestrutura técnica para crescimento escalável',
        icon: '🔧',
        color: '#3b82f6',
        actions: [
            {
                id: 'a1',
                title: 'Criar Gmail corporativo (@clinicavitoria.com.br)',
                time: '1 dia',
                responsible: 'Gestor/TI',
                tasks: [
                    'Registrar conta Google Workspace',
                    'Configurar domínio',
                    'Criar e-mails para equipe principal'
                ],
                delivery: 'Gmail corporativo ativo e configurado'
            },
            {
                id: 'a2',
                title: 'Criar Cloudflare e migrar DNS',
                time: '2 dias',
                responsible: 'TI/Suporte Técnico',
                tasks: [
                    'Criar conta Cloudflare',
                    'Migrar DNS do domínio',
                    'Configurar SSL e cache',
                    'Testar site funcionando normalmente'
                ],
                delivery: 'DNS Cloudflare funcionando (site carregando normalmente)'
            },
            {
                id: 'a3',
                title: 'Criar Business Manager Facebook + verificar domínio',
                time: '3 dias',
                responsible: 'Marketing/Gestor',
                tasks: [
                    'Criar conta Business Manager',
                    'Vincular página do Instagram',
                    'Verificar domínio',
                    'Instalar Meta Pixel'
                ],
                delivery: 'Business Manager aprovada e domínio verificado'
            },
            {
                id: 'a4',
                title: 'Instalar Google Tag Manager, GA4, Meta Pixel',
                time: '2 dias',
                responsible: 'TI/Marketing',
                tasks: [
                    'Criar conta GTM',
                    'Instalar container no site',
                    'Configurar GA4',
                    'Adicionar Meta Pixel via GTM',
                    'Testar eventos de conversão'
                ],
                delivery: 'GA4 coletando dados de visitantes e pixel rastreando'
            }
        ]
    },
    {
        id: 'semana-3',
        name: 'Quick Wins Visuais',
        weeks: 'Semana 3',
        objective: 'Gerar momentum e engajamento da equipe com resultados visíveis',
        icon: '✨',
        color: '#8b5cf6',
        actions: [
            {
                id: 'a5',
                title: 'Reorganização física da recepção',
                time: '2 dias',
                responsible: 'Recepção/Gestor',
                tasks: [
                    'Tirar foto "antes"',
                    'Organizar papéis, arquivos, área de espera',
                    'Tirar foto "depois" e compartilhar com equipe',
                    'Celebrar a mudança visual'
                ],
                delivery: 'Fotos antes/depois da recepção documentadas'
            },
            {
                id: 'a6',
                title: 'Identidade visual WhatsApp',
                time: '1 dia',
                responsible: 'Marketing',
                tasks: [
                    'Foto de perfil profissional (logo da clínica)',
                    'Banner com horário de atendimento',
                    'Mensagem automática de ausência configurada',
                    'Catálogo de serviços atualizado'
                ],
                delivery: 'WhatsApp com identidade visual profissional'
            },
            {
                id: 'a7',
                title: 'Mini-campanha interna "Semana da Transformação"',
                time: '2 dias',
                responsible: 'Gestor/RH',
                tasks: [
                    'Criar cartaz "Semana da Transformação"',
                    'Pequeno brinde/café especial para equipe',
                    'Comunicar o "porquê" das mudanças',
                    'Coletar feedback inicial da equipe'
                ],
                delivery: 'Equipe informada e engajada com as mudanças'
            }
        ]
    },
    {
        id: 'semanas-4-5',
        name: 'CRM + Base de Dados',
        weeks: 'Semanas 4-5',
        objective: 'Centralizar informações e criar fonte única de verdade',
        icon: '📊',
        color: '#10b981',
        actions: [
            {
                id: 'a8',
                title: 'Implementar CRM escolhido (Kommo recomendado)',
                time: '4 dias',
                responsible: 'Gestor + TI',
                tasks: [
                    'Criar conta no CRM escolhido',
                    'Configurar campos personalizados para saúde',
                    'Criar pipeline: Lead → 1º Contato → Agendado → Confirmado → Compareceu → Retorno',
                    'Integrar com WhatsApp Business'
                ],
                delivery: 'CRM funcionando e integrado'
            },
            {
                id: 'a9',
                title: 'Importar base de pacientes existente',
                time: '3 dias',
                responsible: 'Recepção + Estagiário',
                tasks: [
                    'Coletar todas as fontes de dados (Excel, fichas, sistema antigo)',
                    'Padronizar formato: Nome | Telefone | Idade | Bairro | Última Consulta | Especialidade',
                    'Limpar duplicatas e dados incompletos',
                    'Importar para o CRM'
                ],
                delivery: '100 pacientes cadastrados no CRM com dados completos'
            },
            {
                id: 'a10',
                title: 'Treinamento prático da recepção',
                time: '2 dias',
                responsible: 'Gestor',
                tasks: [
                    'Sessão 1: Como cadastrar paciente no CRM (1h)',
                    'Sessão 2: Como usar pipeline e registrar origem (1h)',
                    'Gamificação: Meta diária de 20 cadastros/atualizações',
                    'Placar semanal com premiação'
                ],
                delivery: 'Recepção usando CRM sem resistência'
            }
        ]
    },
    {
        id: 'semanas-6-7',
        name: 'Automação + IA',
        weeks: 'Semanas 6-7',
        objective: 'Ganhar escala sem aumentar headcount',
        icon: '🤖',
        color: '#f59e0b',
        actions: [
            {
                id: 'a11',
                title: 'Migrar para WhatsApp API Oficial',
                time: '3 dias',
                responsible: 'TI/Suporte Externo',
                tasks: [
                    'Solicitar verificação Meta Business',
                    'Contratar provedor de API (360dialog, Twilio, etc)',
                    'Migrar número atual para API',
                    'Testar envio e recebimento de mensagens'
                ],
                delivery: 'WhatsApp API ativa e recebendo mensagens'
            },
            {
                id: 'a12',
                title: 'Implementar IA de atendimento (GPT-4 via n8n)',
                time: '5 dias',
                responsible: 'TI + Suporte Externo',
                tasks: [
                    'Configurar n8n ou Typebot',
                    'Criar prompts para: horários, localização, especialidades',
                    'Definir gatilhos de transferência humana',
                    'Semana 6: Modo sombra (validação humana)',
                    'Semana 7: Modo assistido (horário comercial)'
                ],
                delivery: 'IA respondendo corretamente em 90% dos casos'
            },
            {
                id: 'a13',
                title: 'Configurar follow-up automático',
                time: '2 dias',
                responsible: 'TI/Marketing',
                tasks: [
                    'Criar fluxo: 2h após primeiro contato sem resposta',
                    'Criar fluxo: Lembrete 24h antes da consulta',
                    'Criar fluxo: CSAT pós-atendimento',
                    'Testar todos os gatilhos'
                ],
                delivery: 'Follow-up automático disparando corretamente'
            }
        ]
    },
    {
        id: 'semanas-8-13',
        name: 'Experiência + Reputação',
        weeks: 'Semanas 8-13',
        objective: 'Subir nota Google de 3.7 para 4.3 ⭐',
        icon: '⭐',
        color: '#ef4444',
        actions: [
            {
                id: 'a14',
                title: 'Implementar sistema CSAT pós-atendimento',
                time: '3 dias',
                responsible: 'TI/Marketing',
                tasks: [
                    'Criar fluxo automático após consulta',
                    'Perguntar satisfação de 1 a 5',
                    'Se 4-5: aguardar 2h e pedir avaliação Google',
                    'Se 1-2: alerta imediato para gerente'
                ],
                delivery: 'CSAT coletado de 80%+ dos atendimentos'
            },
            {
                id: 'a15',
                title: 'Campanha presencial de avaliações (QR Code)',
                time: '2 dias',
                responsible: 'Recepção/Marketing',
                tasks: [
                    'Criar banner A3 com QR Code para Google',
                    'Posicionar em local visível na recepção',
                    'Treinar equipe: "Quando paciente elogia, mostrar QR"',
                    'Meta: 10+ novas avaliações positivas por semana'
                ],
                delivery: 'QR Code instalado e gerando avaliações'
            },
            {
                id: 'a16',
                title: 'Protocolo de resposta a avaliações negativas',
                time: 'Contínuo',
                responsible: 'Gestor/Atendimento',
                tasks: [
                    'Responder em até 4 horas úteis',
                    'Formato: Agradecer → Desculpar → Oferecer solução → Contato direto',
                    'Ação interna: Revisar processo que gerou problema',
                    'Follow-up: Ligar para paciente em 24h'
                ],
                delivery: '100% de avaliações negativas respondidas'
            }
        ]
    },
    {
        id: 'semanas-9-11',
        name: 'Otimização de Receita',
        weeks: 'Semanas 9-11',
        objective: 'Aumentar faturamento sem aumentar custos de aquisição',
        icon: '💰',
        color: '#10b981',
        actions: [
            {
                id: 'a17',
                title: 'Auditoria de horários ociosos + Promoção',
                time: '4 dias',
                responsible: 'Gestor/Recepção',
                tasks: [
                    'Mapear horários com < 60% ocupação',
                    'Criar promoção "Horários Inteligentes" (15% off)',
                    'Divulgar via WhatsApp e Instagram',
                    'Medir aumento de ocupação'
                ],
                delivery: 'Horários ociosos reduzidos em 30%+'
            },
            {
                id: 'a18',
                title: 'Campanha de reativação de pacientes inativos',
                time: '5 dias',
                responsible: 'Marketing/Recepção',
                tasks: [
                    'Segmentar pacientes inativos > 6 meses no CRM',
                    'Criar oferta exclusiva "Volta pra Casa"',
                    'Disparar via WhatsApp + SMS em lotes de 50/dia',
                    'Medir taxa de retorno'
                ],
                delivery: '50+ pacientes inativos reativados'
            },
            {
                id: 'a19',
                title: 'Programa de Indicação',
                time: '3 dias',
                responsible: 'Marketing/Gestor',
                tasks: [
                    'Criar sistema: "Indique 3 amigo, ganhe 1 consulta"',
                    'Fazer cartões físicos na recepção',
                    'Divulgar no Instagram',
                    'Treinar recepção para entregar cartão pós-atendimento'
                ],
                delivery: '20+ novos pacientes via indicação'
            }
        ]
    },
    {
        id: 'semanas-12-13',
        name: 'Gestão & Escala',
        weeks: 'Semanas 12-13',
        objective: 'Consolidar processos e preparar próxima fase',
        icon: '📈',
        color: '#8b5cf6',
        actions: [
            {
                id: 'a20',
                title: 'Dashboard Executivo',
                time: '4 dias',
                responsible: 'Gestor/TI',
                tasks: [
                    'Criar dashboard em Google Data Studio ou Metabase',
                    'KPIs em tempo real visíveis',
                    'Comparativo semana/mês',
                    'Alertas automáticos (queda de conversão, etc)'
                ],
                delivery: 'Dashboard acessível por mobile e desktop'
            },
            {
                id: 'a21',
                title: 'Playbook de Processos',
                time: '3 dias',
                responsible: 'Gestor',
                tasks: [
                    'Documento único com todos os processos',
                    'Vídeos curtos de treinamento',
                    'Checklist para novos funcionários',
                    'Testar com funcionário fictício'
                ],
                delivery: 'Playbook completo e testado'
            },
            {
                id: 'a22',
                title: 'Prospecção B2B Ativa',
                time: '5 dias',
                responsible: 'Comercial/Gestor',
                tasks: [
                    'Listar 20 empresas locais (>50 funcionários)',
                    'Criar proposta corporativa em PDF',
                    'Agendar 5 reuniões',
                    'Apresentar convênio empresarial'
                ],
                delivery: '2+ contratos B2B assinados'
            }
        ]
    }
];

// Data - Método 5S
const metodo5s = [
    {
        numero: '1',
        nome: 'SEIRI',
        titulo: 'Utilização',
        descricao: 'Eliminar excessos e manter apenas o necessário',
        items: ['Eliminar múltiplos WhatsApps → 1 número oficial', 'Cortar ferramentas não usadas', 'Unificar agendas e canais'],
        color: '#ef4444'
    },
    {
        numero: '2',
        nome: 'SEITON',
        titulo: 'Organização',
        descricao: 'Um lugar para cada coisa, cada coisa em seu lugar',
        items: ['CRM central (Kommo, Agendor ou Pipedrive)', 'Pipeline padronizado', 'Base de dados única (Supabase)'],
        color: '#3b82f6'
    },
    {
        numero: '3',
        nome: 'SEISO',
        titulo: 'Limpeza',
        descricao: 'Eliminar sujeiras e problemas na raiz',
        items: ['Limpeza da base de pacientes', 'Limpeza do site (páginas quebradas)', 'Limpeza da reputação (Google)'],
        color: '#10b981'
    },
    {
        numero: '4',
        nome: 'SEIKETSU',
        titulo: 'Padronização',
        descricao: 'Manter os 3S anteriores funcionando',
        items: ['Scripts de atendimento', 'SLA de resposta (máx 15 min)', 'Playbook operacional'],
        color: '#8b5cf6'
    },
    {
        numero: '5',
        nome: 'SHITSUKE',
        titulo: 'Disciplina',
        descricao: 'Criar o hábito da melhoria contínua',
        items: ['Reunião semanal obrigatória', 'KPIs revisados semanalmente', 'Cultura de melhoria contínua'],
        color: '#f59e0b'
    }
];

// Data - Scripts
const scripts = [
    {
        id: 'script1',
        icon: '📲',
        title: 'Atendimento Inicial',
        text: `Olá! 😊 Sou [NOME], da Clínica Vitória.
Como posso te ajudar hoje?

[Opções]
1️⃣ Agendar consulta
2️⃣ Tirar dúvida
3️⃣ Falar com atendente`
    },
    {
        id: 'script2',
        icon: '⏰',
        title: 'Follow-up Automático (2h)',
        text: `Oi [NOME]! 👋

Vi que você entrou em contato mais cedo.
Conseguiu todas as informações que precisava?

Posso te ajudar a agendar sua consulta agora? 
Temos horários disponíveis ainda esta semana! 😊`
    },
    {
        id: 'script3',
        icon: '✅',
        title: 'Agendamento Confirmado',
        text: `✅ Consulta agendada!

📅 [DIA] às [HORA]
📍 Clínica Vitória - Centro
👨‍⚕️ Dr(a). [NOME]

Vou te mandar um lembrete 1 dia antes, tudo bem?

Qualquer dúvida, é só chamar! 😊`
    },
    {
        id: 'script4',
        icon: '⭐',
        title: 'CSAT Pós-Atendimento',
        text: `Olá [NOME]! 😊

De 1 a 5, como você avalia o atendimento de hoje na Clínica Vitória?

1 ⭐ = Muito insatisfeito
5 ⭐ = Muito satisfeito

Sua opinião é muito importante pra gente! 💙`
    },
    {
        id: 'script5',
        icon: '🌟',
        title: 'Solicitação Google Review',
        text: `Que ótimo saber que você teve uma boa experiência! 😊

Você poderia nos ajudar deixando uma avaliação no Google? 
Leva só 1 minuto e nos ajuda muito! 💙

[LINK DO GOOGLE]

Muito obrigado! 🙏`
    },
    {
        id: 'script6',
        icon: '🔄',
        title: 'Reativação de Paciente',
        text: `Oi [NOME]! Tudo bem?

Faz um tempo que não te vemos por aqui e sentimos sua falta! 💙

Que tal aproveitar nossa promoção de retorno?
[OFERTA ESPECIAL]

Posso te ajudar a agendar? 😊`
    }
];

// State
let checkedItems = {};

// Load saved state from localStorage
function loadState() {
    const saved = localStorage.getItem('clinicaVitoriaChecklist');
    if (saved) {
        checkedItems = JSON.parse(saved);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('clinicaVitoriaChecklist', JSON.stringify(checkedItems));
}

// Calculate progress
function calculateProgress() {
    const totalActions = phases.reduce((acc, phase) => acc + phase.actions.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalActions) * 100);
}

// Update progress ring
function updateProgressRing() {
    const progress = calculateProgress();
    const progressRing = document.getElementById('progressRing');
    const progressValue = document.getElementById('progressValue');

    if (progressRing && progressValue) {
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (progress / 100) * circumference;
        progressRing.style.strokeDashoffset = offset;
        progressValue.textContent = progress;

        // Update stroke color based on progress
        if (progress < 30) {
            progressRing.style.stroke = '#ef4444';
        } else if (progress < 70) {
            progressRing.style.stroke = '#f59e0b';
        } else {
            progressRing.style.stroke = '#10b981';
        }
    }
}

// Toggle action check
function toggleCheck(actionId) {
    checkedItems[actionId] = !checkedItems[actionId];
    saveState();
    updateProgressRing();

    const checkEl = document.querySelector(`[data-action="${actionId}"]`);
    if (checkEl) {
        checkEl.classList.toggle('checked', checkedItems[actionId]);
        checkEl.innerHTML = checkedItems[actionId] ? '✓' : '';
    }
}

// Toggle phase expansion
function togglePhase(phaseId) {
    const phaseCard = document.querySelector(`[data-phase="${phaseId}"]`);
    if (phaseCard) {
        phaseCard.classList.toggle('expanded');
    }
}

// Render phases
function renderPhases() {
    const container = document.getElementById('phasesContainer');
    if (!container) return;

    container.innerHTML = phases.map(phase => `
        <div class="phase-card" data-phase="${phase.id}">
            <div class="phase-header" onclick="togglePhase('${phase.id}')">
                <div class="phase-header-left">
                    <div class="phase-icon" style="background: ${phase.color}">
                        ${phase.icon}
                    </div>
                    <div class="phase-info">
                        <h3>${phase.name}</h3>
                        <p>${phase.objective}</p>
                    </div>
                </div>
                <div class="phase-meta">
                    <span class="phase-badge">${phase.weeks}</span>
                    <div class="phase-toggle">▼</div>
                </div>
            </div>
            <div class="phase-content">
                ${phase.actions.map((action, idx) => `
                    <div class="action-card">
                        <div class="action-header">
                            <div class="action-check ${checkedItems[action.id] ? 'checked' : ''}" 
                                 data-action="${action.id}"
                                 onclick="toggleCheck('${action.id}')">
                                ${checkedItems[action.id] ? '✓' : ''}
                            </div>
                            <div class="action-title">
                                <h4>${idx + 1}. ${action.title}</h4>
                                <div class="action-badges">
                                    <span class="action-badge time">⏱️ ${action.time}</span>
                                    <span class="action-badge responsible">👤 ${action.responsible}</span>
                                </div>
                            </div>
                        </div>
                        <div class="action-tasks">
                            ${action.tasks.map(task => `
                                <div class="action-task">
                                    <span class="action-task-bullet">▸</span>
                                    <span>${task}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="action-delivery">
                            <strong>📦 Entrega:</strong>
                            <p>${action.delivery}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render diagnóstico
function renderDiagnostico() {
    const container = document.getElementById('diagnosticoGrid');
    if (!container) return;

    container.innerHTML = `
        <div class="diagnostico-card positive">
            <div class="card-header">
                <div class="card-icon positive">✅</div>
                <h3>Pontos Fortes</h3>
            </div>
            <ul class="diagnostico-list">
                <li><span class="check">✅</span> Clínica consolidada (fundada em 2007)</li>
                <li><span class="check">✅</span> Forte presença local (Centro da cidade)</li>
                <li><span class="check">✅</span> Tráfego orgânico alto via Google Maps</li>
                <li><span class="check">✅</span> WhatsApp é o coração da operação</li>
                <li><span class="check">⚠️</span> Boa demanda, porém baixa eficiência</li>
            </ul>
        </div>
        <div class="diagnostico-card negative">
            <div class="card-header">
                <div class="card-icon negative">⚠️</div>
                <h3>Gargalos Identificados</h3>
            </div>
            <ul class="diagnostico-list">
                <li><span class="alert">🔴</span> Conversão abaixo do potencial</li>
                <li><span class="alert">🔴</span> Atendimento manual, sem CRM</li>
                <li><span class="alert">🔴</span> Ausência de dados centralizados</li>
                <li><span class="alert">🔴</span> Nota Google abaixo do ideal (3.7 ⭐)</li>
                <li><span class="alert">🔴</span> Zero tráfego pago estruturado</li>
                <li><span class="alert">🔴</span> Nenhum funil de retenção/upsell</li>
                <li><span class="alert">🔴</span> Processos não documentados</li>
            </ul>
        </div>
    `;

    // Add summary after grid
    const summary = document.createElement('div');
    summary.className = 'diagnostico-summary';
    summary.innerHTML = `
        <div class="summary-icon">💡</div>
        <div class="summary-content">
            <h4>Resumo do Diagnóstico</h4>
            <p>A Clínica Vitória já tem demanda, mas perde dinheiro por falta de organização, automação e estratégia de crescimento.</p>
            <div class="highlight-box">
                <strong>Potencial de ganho imediato:</strong> 20-30% de aumento de receita apenas otimizando o que já existe.
            </div>
        </div>
    `;
    container.parentNode.appendChild(summary);
}

// Render 5S
function render5S() {
    const container = document.getElementById('metodo5sContainer');
    if (!container) return;

    container.innerHTML = metodo5s.map(s => `
        <div class="s-card">
            <div class="s-number" style="background: ${s.color}">${s.numero}</div>
            <div class="s-content">
                <h3>${s.nome} - ${s.titulo}</h3>
                <p>${s.descricao}</p>
                <div class="s-items">
                    ${s.items.map(item => `<span class="s-item">${item}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    // Add manifesto
    const manifesto = document.createElement('div');
    manifesto.className = 'manifesto-box';
    manifesto.innerHTML = `
        <h3>📌 Manifesto da Clínica Vitória</h3>
        <p>Antes de gastar 1 real em tráfego pago, vamos:</p>
        <div class="manifesto-grid">
            <div class="manifesto-item">✅ Organizar a operação</div>
            <div class="manifesto-item">✅ Automatizar processos</div>
            <div class="manifesto-item">✅ Otimizar conversão</div>
            <div class="manifesto-item">✅ Encantar pacientes</div>
            <div class="manifesto-item">✅ Construir reputação</div>
        </div>
    `;
    container.parentNode.appendChild(manifesto);
}

// Render KPIs
function renderKPIs() {
    const container = document.getElementById('kpisGrid');
    if (!container) return;

    container.innerHTML = `
        <div class="kpi-category">
            <h3>⚙️ Operacional</h3>
            <div class="kpi-cards">
                <div class="kpi-card">
                    <span class="kpi-icon">⏱️</span>
                    <span class="kpi-label">Tempo de Resposta</span>
                    <span class="kpi-value">≤ 15 min</span>
                    <span class="kpi-source">CRM/IA Analytics</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">📅</span>
                    <span class="kpi-label">Taxa de Ocupação</span>
                    <span class="kpi-value">≥ 80%</span>
                    <span class="kpi-source">CRM</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">🔄</span>
                    <span class="kpi-label">Taxa de No-Show</span>
                    <span class="kpi-value">≤ 15%</span>
                    <span class="kpi-source">CRM</span>
                </div>
            </div>
        </div>
        <div class="kpi-category">
            <h3>📈 Marketing & Conversão</h3>
            <div class="kpi-cards">
                <div class="kpi-card">
                    <span class="kpi-icon">📈</span>
                    <span class="kpi-label">Conversão WhatsApp</span>
                    <span class="kpi-value">≥ 25%</span>
                    <span class="kpi-source">Contatos/Agendamentos</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">⭐</span>
                    <span class="kpi-label">Nota Google</span>
                    <span class="kpi-value">≥ 4.3</span>
                    <span class="kpi-source">Google Business</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">🔁</span>
                    <span class="kpi-label">Retorno Pacientes</span>
                    <span class="kpi-value">≥ 30%</span>
                    <span class="kpi-source">CRM</span>
                </div>
            </div>
        </div>
        <div class="kpi-category">
            <h3>💰 Financeiro</h3>
            <div class="kpi-cards">
                <div class="kpi-card">
                    <span class="kpi-icon">💰</span>
                    <span class="kpi-label">Aumento Faturamento</span>
                    <span class="kpi-value">+20%</span>
                    <span class="kpi-source">Comparativo 90 dias</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">💵</span>
                    <span class="kpi-label">Ticket Médio</span>
                    <span class="kpi-value">+15%</span>
                    <span class="kpi-source">Faturamento/nº atendimentos</span>
                </div>
                <div class="kpi-card">
                    <span class="kpi-icon">♻️</span>
                    <span class="kpi-label">Receita B2B</span>
                    <span class="kpi-value">10%</span>
                    <span class="kpi-source">Contratos corporativos</span>
                </div>
            </div>
        </div>
    `;
}

// Render Scripts
function renderScripts() {
    const container = document.getElementById('scriptsContainer');
    if (!container) return;

    container.innerHTML = scripts.map(script => `
        <div class="script-card">
            <div class="script-header">
                <span class="script-icon">${script.icon}</span>
                <h4>${script.title}</h4>
            </div>
            <div class="script-content">
                <pre class="script-text">${script.text}</pre>
                <button class="script-copy" onclick="copyScript('${script.id}')">
                    📋 Copiar Script
                </button>
            </div>
        </div>
    `).join('');
}

// Render Orçamento
function renderOrcamento() {
    const container = document.getElementById('orcamentoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="orcamento-table-wrapper">
            <table class="orcamento-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Custo Mensal</th>
                        <th>Custo Total</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>CRM</td><td>R$ 300</td><td>R$ 900</td><td>Kommo ou similar</td></tr>
                    <tr><td>WhatsApp API</td><td>R$ 150</td><td>R$ 450</td><td>Meta Business</td></tr>
                    <tr><td>Automação (n8n/Typebot)</td><td>R$ 200</td><td>R$ 600</td><td>Hospedagem + ferramentas</td></tr>
                    <tr><td>Supabase</td><td>R$ 100</td><td>R$ 300</td><td>Data Lake</td></tr>
                    <tr><td>OpenAI API</td><td>R$ 150</td><td>R$ 450</td><td>IA conversacional</td></tr>
                    <tr><td>Cloudflare</td><td>R$ 0</td><td>R$ 0</td><td>Plano gratuito</td></tr>
                    <tr><td>Google Workspace</td><td>R$ 30</td><td>R$ 90</td><td>E-mail corporativo</td></tr>
                    <tr><td>Suporte Técnico</td><td>R$ 500</td><td>R$ 1.500</td><td>Pontual</td></tr>
                    <tr><td>Contingência</td><td>-</td><td>R$ 2.000</td><td>Imprevistos</td></tr>
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td><strong>TOTAL</strong></td>
                        <td><strong>~R$ 1.430/mês</strong></td>
                        <td><strong>~R$ 6.290</strong></td>
                        <td><strong>90 dias</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="roi-section">
            <h3>💡 ROI Esperado</h3>
            <div class="roi-grid">
                <div class="roi-card">
                    <span class="roi-label">Investimento</span>
                    <span class="roi-value">R$ 6.290</span>
                </div>
                <div class="roi-card highlight">
                    <span class="roi-label">Aumento de Receita</span>
                    <span class="roi-value">+20%</span>
                </div>
                <div class="roi-card">
                    <span class="roi-label">Payback</span>
                    <span class="roi-value">2-3 meses</span>
                </div>
                <div class="roi-card highlight">
                    <span class="roi-label">ROI em 12 meses</span>
                    <span class="roi-value">300-500%</span>
                </div>
            </div>
        </div>
    `;
}

// Render Footer
function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-header">
            <h2>🚀 Fase 2 - Visão de Futuro</h2>
            <p>Após os 90 dias, com a casa organizada</p>
        </div>
        <div class="footer-grid">
            <div class="footer-card">
                <div class="footer-card-icon">📊</div>
                <h3>Tráfego Pago</h3>
                <p>Google Ads + Meta Ads com base sólida e conversão otimizada. Budget inicial: R$ 3-5k/mês</p>
            </div>
            <div class="footer-card">
                <div class="footer-card-icon">🌐</div>
                <h3>Expansão de Serviços</h3>
                <p>Telemedicina, programas de saúde preventiva e parcerias estratégicas</p>
            </div>
            <div class="footer-card">
                <div class="footer-card-icon">🏆</div>
                <h3>Escala Regional</h3>
                <p>Abrir filial, franquia do modelo, tornar-se referência regional</p>
            </div>
        </div>
        <div class="footer-quote">
            <blockquote>"A excelência não é um ato, mas um hábito."<cite>— Aristóteles</cite></blockquote>
            <p class="footer-reminder">Transformação não acontece de uma vez. Acontece: <strong>um processo de cada vez, uma semana de cada vez, uma vitória de cada vez.</strong></p>
        </div>
    `;
}

// Copy script to clipboard
function copyScript(scriptId) {
    const script = scripts.find(s => s.id === scriptId);
    if (script) {
        navigator.clipboard.writeText(script.text).then(() => {
            showToast('Script copiado! 📋');
        });
    }
}

// Show toast notification
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Tab navigation
function initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });
}

// Add gradient definition for progress ring
function addSVGDefs() {
    const svg = document.querySelector('.progress-ring');
    if (!svg) return;

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6"/>
            <stop offset="100%" style="stop-color:#10b981"/>
        </linearGradient>
    `;
    svg.insertBefore(defs, svg.firstChild);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    addSVGDefs();
    renderPhases();
    renderDiagnostico();
    render5S();
    renderKPIs();
    renderScripts();
    renderOrcamento();
    renderFooter();
    updateProgressRing();
    initTabs();
});
