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
                title: 'Infraestrutura Técnica para Crescimento Escalável',
                time: '3-5 dias',
                responsible: 'TI/Gestor',
                tasks: [
                    'Criação de e-mail corporativo no Google Gmail para gerenciamento da base de dados. Implementação do Supabase como Data Lake, atuando como repositório centralizado para armazenamento e gerenciamento de dados.',
                    'Provisionamento de conta na Cloudflare com migração e atualização dos registros DNS para os nameservers da Cloudflare',
                    'Otimização de performance, aumento da segurança (proteção contra DDoS, firewall e SSL)',
                    'Centralização do recebimento dos e-mails corporativos em provedor principal (Google Workspace ou Microsoft Outlook)',
                    'Criação de e-mails comerciais por setor:',
                    '• atendimento@clinicavitoriavc.com.br (Atendimento/Pacientes)',
                    '• agendamento@clinicavitoriavc.com.br (Agendamentos)',
                    '• convenios@clinicavitoriavc.com.br (Convênios)',
                    '• financeiro@clinicavitoriavc.com.br (Financeiro)',
                    '• suporte@clinicavitoriavc.com.br (Suporte/SAC)',
                    '• administrativo@clinicavitoriavc.com.br (Administrativo/RH)',
                    '• comercial@clinicavitoriavc.com.br (Comercial/Marketing)',
                    '• diretoria@clinicavitoriavc.com.br (Diretoria/Gestão)'
                ],
                benefits: [
                    'Comunicação mais rápida e clara',
                    'Evita duplicidade de mensagens',
                    'Facilita automação, integrações e delegação de equipe',
                    'Escala bem com CRM, WhatsApp e sistemas de agendamento'
                ],
                delivery: 'Cloudflare configurado com DNS migrado, SSL ativo e 8 e-mails corporativos funcionando'
            },
            {
                id: 'a2',
                title: 'Criar Business Manager Facebook + Verificar Domínio + Integração WhatsApp API',
                time: '5-7 dias',
                responsible: 'TI/Marketing/Gestor',
                tasks: [
                    '📌 ETAPA 1 – Estruturação do Facebook Business Manager (BM)',
                    '• Criação e configuração do Portfólio Empresarial no Facebook Business Manager',
                    '• Inclusão, validação e aprovação do domínio oficial da clínica junto à Meta',
                    '',
                    '📌 ETAPA 2 – Configuração de Aplicação na Meta Developers',
                    '• Criação de aplicativo na plataforma Meta for Developers',
                    '• Configuração das permissões necessárias para uso da API Oficial do WhatsApp',
                    '• Preparação do ambiente para integração com o CRM',
                    '',
                    '📌 ETAPA 3 – Integração da API Oficial do WhatsApp',
                    '• Vinculação do número principal de WhatsApp à API Oficial para atendimento ao paciente',
                    '• Integração da API Oficial com o CRM para automação, histórico de conversas e gestão de leads',
                    '',
                    '📌 ETAPA 4 – Configuração de API Alternativa para Prospecção',
                    '• Vinculação de um segundo número de WhatsApp a uma API não oficial (Baileys)',
                    '• Utilização deste número para prospecção ativa, comunicação em grupos e ações operacionais específicas',
                    '',
                    '📌 ETAPA 5 – Verificação e Selos de Autenticidade',
                    '• Solicitação e obtenção de dois Selos Azuis de verificação junto à Meta (um para cada número)',
                    '• Consolidação da identidade digital da clínica, garantindo maior credibilidade e profissionalismo'
                ],
                benefits: [
                    'Redução de riscos de fraudes e golpes',
                    'Aumento da confiança do paciente ao interagir com números verificados',
                    'Padronização e profissionalização dos canais oficiais de comunicação',
                    'Base técnica preparada para crescimento escalável e integrações futuras'
                ],
                delivery: 'Business Manager aprovado, domínio verificado, 2 APIs WhatsApp integradas (Oficial + Baileys), 2 Selos Azuis obtidos'
            },
            {
                id: 'a3',
                title: 'Implantação da Arquitetura de Automação, APIs e Inteligência Artificial',
                time: '7-10 dias',
                responsible: 'TI/Desenvolvedor/Gestor',
                tasks: [
                    '📌 ETAPA 1 – Configuração das APIs da Meta (Instagram, Facebook e Messenger)',
                    '• Criação e configuração das APIs do Instagram, Facebook Pages e Messenger',
                    '• Integração da Meta Ads API para leitura, consumo e automação de dados de campanhas publicitárias',
                    '',
                    '📌 ETAPA 2 – Configuração das APIs do Google',
                    '• Criação e gerenciamento das APIs do Google para integração com n8n (Gmail, Sheets, Calendar, etc.)',
                    '• Provisionamento e gerenciamento de credenciais e chaves de acesso seguindo boas práticas de segurança',
                    '',
                    '📌 ETAPA 3 – Provisionamento da API da OpenAI',
                    '• Criação e configuração da chave de API da OpenAI para utilização da inteligência artificial',
                    '• Definição de permissões, limites de uso e políticas de segurança para consumo da API',
                    '',
                    '📌 ETAPA 4 – Criação e Treinamento da Inteligência Artificial',
                    '• Desenvolvimento e treinamento da IA para atendimento automatizado',
                    '• Configuração da IA para responder dúvidas frequentes, qualificar leads e realizar marcações de atendimentos',
                    '• Ativação dos canais de atendimento automatizado via WhatsApp e Instagram',
                    '',
                    '📌 ETAPA 5 – Estratégia de Contato Automático via WhatsApp',
                    '• Implementação de estratégia de acionamento automático de leads via WhatsApp',
                    '• Integração entre formulários, redes sociais e CRM para disparo inteligente de mensagens iniciais',
                    '',
                    '📌 ETAPA 6 – Estruturação dos Funis Inbound no CRM',
                    '• Criação e configuração dos funis de inbound marketing no CRM',
                    '• Definição do fluxo de atendimento inicial realizado pela IA quando o lead inicia o contato',
                    '• Automação da movimentação dos cards de leads dentro do CRM conforme estágio do funil'
                ],
                benefits: [
                    'Atendimento automatizado, padronizado e escalável',
                    'Redução significativa do tempo operacional da equipe',
                    'Qualificação inteligente e automática de leads',
                    'Integração completa entre canais digitais, inteligência artificial e CRM',
                    'Arquitetura técnica preparada para crescimento contínuo e expansão futura'
                ],
                delivery: 'APIs Meta/Google/OpenAI configuradas, IA treinada e ativa, automação WhatsApp funcionando, funis CRM estruturados'
            },
            {
                id: 'a4',
                title: 'Implantação de Follow-ups Inteligentes, Funis Outbound e Gestão de Satisfação (CSAT)',
                time: '10-14 dias',
                responsible: 'TI/Marketing/Atendimento',
                tasks: [
                    '📌 ETAPA 1 – Follow-ups Inteligentes Contextuais',
                    '• Configuração de follow-ups automáticos baseados no contexto da conversa',
                    '• Identificação de intenções do lead (solicitação de preço, orçamento, consulta)',
                    '• Disparo automático de mensagens 2h após contato inicial via API Oficial WhatsApp (janela 24h)',
                    '• Acompanhamento automático para todo lead que solicite orçamento sem concluir agendamento',
                    '',
                    '📌 ETAPA 2 – Estrutura de Automação (CRM ou n8n)',
                    '• Automação nativa no CRM: regras internas, gatilhos e fluxos predefinidos',
                    '• Automação avançada via n8n: maior inteligência, flexibilidade e escalabilidade',
                    '• Definição da arquitetura conforme volume de leads e complexidade operacional',
                    '',
                    '📌 ETAPA 3 – Criação do Funil Outbound',
                    '• Estruturação do funil outbound no CRM para: clientes inativos, conversas abandonadas, prospecção ativa',
                    '• Definição de estágios, critérios de avanço e automações associadas',
                    '',
                    '📌 ETAPA 4 – Padronização de Atendimento e Scripts',
                    '• Criação de scripts de atendimento padronizados',
                    '• Configuração de mensagens rápidas (quick replies)',
                    '• Definição de mensagens de encerramento e despedida',
                    '• Padronização da comunicação para clareza, consistência e profissionalismo',
                    '',
                    '📌 ETAPA 5 – Implementação do CSAT (Customer Satisfaction Score)',
                    '• Fluxo de CSAT com escala 1-5: 1⭐ Muito insatisfeito → 5⭐ Muito satisfeito',
                    '• Coleta da percepção do cliente imediatamente após o atendimento',
                    '',
                    '📌 ETAPA 6 – Uso Estratégico do CSAT no CRM',
                    '• Identificar problemas antes que evoluam para reclamações',
                    '• Ajustar processos e fluxos de atendimento',
                    '• Detectar falhas por canal ou atendente',
                    '• Orientar ações de melhoria contínua com decisões baseadas em dados',
                    '',
                    '📌 ETAPA 7 – Automação de Prioridade por Nota',
                    '• Cliente 5⭐ → segue fluxo normal',
                    '• Cliente 3⭐ → contato leve de acompanhamento',
                    '• Cliente 1-2⭐ → acionamento imediato da equipe',
                    '• Priorização inteligente de clientes em risco',
                    '',
                    '📌 ETAPA 8 – Redução de Churn e Base para Customer Success',
                    '• CSAT como indicador de risco de cancelamento (churn)',
                    '• Identificação proativa de clientes insatisfeitos antes da perda',
                    '• Alimentação do pipeline de Customer Success: status de risco, retenção, upsell',
                    '',
                    '📌 ETAPA 9 – Automação de Avaliação no Google Meu Negócio',
                    '• Automação para clientes com notas 4-5⭐',
                    '• Disparo automático solicitando avaliação no Google',
                    '• Script: "Que bom saber que você ficou satisfeito(a), {{nome}}! ⭐ Se puder, deixe sua avaliação no Google — isso nos ajuda demais 😊 👉 {{link_google}}"'
                ],
                benefits: [
                    'Atendimento mais inteligente, contextual e automatizado',
                    'Aumento da conversão de orçamentos em agendamentos',
                    'Redução de churn e abandono silencioso',
                    'Melhoria contínua da experiência do cliente',
                    'Fortalecimento da reputação online da empresa',
                    'Decisões estratégicas baseadas em dados reais, não em achismos'
                ],
                delivery: 'Follow-ups automáticos ativos, funil outbound estruturado, CSAT implementado, automação Google Reviews funcionando'
            }
        ]
    },
    {
        id: 'semana-3',
        name: 'Auditoria e Inventário de Canais Digitais',
        weeks: 'Semana 3',
        objective: 'Mapear, padronizar e estruturar todos os ativos digitais da Clínica Vitória, garantindo rastreabilidade de dados, integração entre plataformas e uma base técnica sólida para estratégias de tráfego pago, análise de performance e crescimento digital.',
        icon: '🔍',
        color: '#8b5cf6',
        actions: [
            {
                id: 'a5',
                title: 'Auditoria de Canais Digitais',
                time: '2 dias',
                responsible: 'Marketing/TI',
                tasks: [
                    '📌 Levantamento completo de todos os canais digitais ativos e inativos da clínica',
                    '• Identificação de perfis oficiais, perfis antigos, duplicados ou não utilizados',
                    '• Validação de acessos administrativos e níveis de permissão em cada canal',
                    '',
                    '📌 Canais analisados:',
                    '• Instagram (@clinicavitoriavc e demais perfis relacionados)',
                    '• Facebook',
                    '• Google Meu Negócio',
                    '• WhatsApp Business',
                    '• Site institucional',
                    '• Outras redes ou plataformas eventualmente ativas'
                ],
                delivery: 'Relatório completo de auditoria de todos os canais digitais'
            },
            {
                id: 'a6',
                title: 'Inventário Digital Centralizado',
                time: '1 dia',
                responsible: 'TI/Gestor',
                tasks: [
                    '📌 Criação de inventário centralizado contendo:',
                    '• Nome do canal',
                    '• URL',
                    '• Status (ativo / inativo)',
                    '• Tipo de conta (pessoal, comercial ou business)',
                    '• Acessos administrativos',
                    '',
                    '📌 Consolidação da documentação oficial dos ativos digitais da Clínica Vitória'
                ],
                delivery: 'Planilha/documento de inventário digital completo e organizado'
            },
            {
                id: 'a7',
                title: 'Infraestrutura de Rastreamento (GTM + Meta Pixel)',
                time: '2 dias',
                responsible: 'TI/Marketing',
                tasks: [
                    '📌 Criação e/ou validação do Meta Pixel',
                    '• Instalação e configuração correta do Pixel via Google Tag Manager (GTM)',
                    '• Verificação do disparo de eventos (PageView, ViewContent, Lead, entre outros)',
                    '• Garantia de conformidade com boas práticas de mensuração e rastreamento'
                ],
                delivery: 'Meta Pixel instalado via GTM, eventos validados e funcionando corretamente'
            },
            {
                id: 'a8',
                title: 'Integração Meta (Instagram + Facebook Ads)',
                time: '1 dia',
                responsible: 'Marketing/TI',
                tasks: [
                    '📌 Conexão do Instagram Business ao Facebook Ads Manager',
                    '• Vinculação correta ao Business Manager da clínica',
                    '• Validação de permissões, ativos digitais e contas de anúncios associadas'
                ],
                delivery: 'Instagram e Facebook Ads integrados corretamente ao Business Manager'
            },
            {
                id: 'a9',
                title: 'Análise de Audiência do Instagram',
                time: '1 dia',
                responsible: 'Marketing',
                tasks: [
                    '📌 Análise da base atual de seguidores do Instagram',
                    '• Identificação da distribuição geográfica da audiência',
                    '• Levantamento do percentual dos ~16.000 seguidores localizados em Vitória da Conquista',
                    '• Avaliação da relevância da audiência local para estratégias de tráfego pago, conversão e agendamento'
                ],
                delivery: 'Relatório de análise de audiência com métricas geográficas e recomendações'
            },
            {
                id: 'a10',
                title: 'Diagnóstico e Próximos Passos',
                time: '1 dia',
                responsible: 'Gestor/Marketing/TI',
                tasks: [
                    '📌 Identificação de gaps técnicos, riscos operacionais e oportunidades de otimização',
                    '',
                    '📌 Recomendações estratégicas para:',
                    '• Tráfego pago',
                    '• Conteúdo local e regional',
                    '• Estratégias de crescimento digital',
                    '• Integração com CRM e automações'
                ],
                delivery: 'Documento de diagnóstico com plano de ação para próximas fases'
            },
            {
                id: 'a11',
                title: 'Auditoria de Horários Ociosos',
                time: '7 dias',
                responsible: 'Gestor/Recepção',
                tasks: [
                    '📌 Monitoramento completo das agendas médicas por 7 dias consecutivos',
                    '• Coleta de dados de ocupação por profissional, dia e turno',
                    '• Consolidação das informações em base única para análise'
                ],
                delivery: 'Base de dados de ocupação completa de 7 dias'
            },
            {
                id: 'a12',
                title: 'Análise de Capacidade Produtiva',
                time: '2 dias',
                responsible: 'Gestor/TI',
                tasks: [
                    '📌 Identificação dos principais pontos de ociosidade:',
                    '',
                    '• Por profissional: Quais médicos apresentam maior volume de horários vagos',
                    '• Por dia da semana: Identificação dos dias com menor fluxo de atendimentos',
                    '• Por turno: Comparativo manhã vs tarde para identificar "buracos" na agenda'
                ],
                delivery: 'Relatório de análise de capacidade produtiva por profissional/dia/turno'
            },
            {
                id: 'a13',
                title: 'Análise de Capacidade vs. Produção Real + Mapa de Ociosidade',
                time: '2 dias',
                responsible: 'Gestor',
                tasks: [
                    '📌 Cálculo da capacidade máxima diária de atendimentos da clínica',
                    '• Comparação com o volume médio real de atendimentos realizados',
                    '• Identificação do gap produtivo (capacidade não utilizada)',
                    '',
                    '📌 ENTREGA: Mapa de Ociosidade',
                    '• Visualização clara dos pontos de perda operacional',
                    '• Identificação de onde a clínica perde faturamento potencial',
                    '• Base para: campanhas de preenchimento, ajustes de escala, reorganização de horários'
                ],
                delivery: 'Mapa de Ociosidade com gap produtivo identificado e recomendações'
            },
            {
                id: 'a14',
                title: 'Eliminação de Redundâncias Operacionais',
                time: '2 dias',
                responsible: 'Gestor/TI',
                tasks: [
                    '📌 Mapeamento dos fluxos de atendimento e agendamento',
                    '• Identificação de duplicidade de processos e ferramentas'
                ],
                delivery: 'Mapa de processos com redundâncias identificadas'
            },
            {
                id: 'a15',
                title: 'Consolidação de Canais e Agendas',
                time: '3 dias',
                responsible: 'Gestor/TI/Recepção',
                tasks: [
                    '📌 Unificação de todos os atendimentos em um único WhatsApp Business oficial',
                    '• Consolidação das agendas médicas em um sistema centralizado',
                    '• Eliminação de cenários onde múltiplas recepcionistas usam sistemas diferentes para agendamento'
                ],
                delivery: 'Canal único de WhatsApp e agenda centralizada funcionando'
            },
            {
                id: 'a16',
                title: 'Auditoria de Ferramentas e Custos + Lista de Cortes',
                time: '2 dias',
                responsible: 'Gestor/Financeiro',
                tasks: [
                    '📌 Levantamento de todas as ferramentas e softwares pagos',
                    '• Identificação de sistemas: subutilizados, não utilizados, redundantes',
                    '• Avaliação de custo-benefício real de cada ferramenta',
                    '',
                    '📌 ENTREGA: Lista de Cortes e Otimização de Custos',
                    '• Relação de ferramentas e serviços passíveis de cancelamento',
                    '• Estimativa de economia mensal (R$/mês) com eliminação de redundâncias',
                    '• Recomendações de consolidação e padronização tecnológica'
                ],
                delivery: 'Lista de cortes com estimativa de economia mensal e recomendações'
            }
        ]
    },
    {
        id: 'semanas-4-5',
        name: 'Implementação de CRM e Organização da Base de Pacientes',
        weeks: 'Semanas 4-5',
        objective: 'Centralizar e organizar todas as informações dos pacientes em um sistema de CRM, garantindo dados limpos, estruturados e segmentados para gestão eficiente, campanhas de reativação e análise estratégica da clínica.',
        icon: '📊',
        color: '#10b981',
        actions: [
            {
                id: 'a17',
                title: 'Implementação do CRM',
                time: '5 dias',
                responsible: 'Gestor/TI',
                tasks: [
                    '📌 Seleção e configuração do CRM adequado para a clínica',
                    '• Importação da base atual de pacientes (mesmo que proveniente de planilhas Excel)',
                    '',
                    '📌 Configuração dos campos essenciais:',
                    '• Nome completo',
                    '• Telefone',
                    '• Última consulta',
                    '• Especialidade',
                    '• Origem do paciente (Google / Instagram / Indicação / Outros)',
                    '',
                    '📌 Criação do pipeline de atendimento:',
                    '• Lead → Contato Feito → Agendado → Compareceu → Retorno',
                    '',
                    '📌 Treinamento da recepção:',
                    '• Procedimento padrão: ao agendar, registrar no CRM a origem do paciente'
                ],
                delivery: 'CRM configurado e integrado com os primeiros 100 pacientes cadastrados'
            },
            {
                id: 'a18',
                title: 'Organização da Base de Dados',
                time: '4 dias',
                responsible: 'Recepção/Estagiário/Gestor',
                tasks: [
                    '📌 Levantamento de todas as informações de pacientes dos últimos 6 meses:',
                    '• Fichas físicas',
                    '• Planilhas Excel',
                    '',
                    '📌 Criação de planilha mestra consolidando dados:',
                    '• Nome | Telefone | Idade | Bairro | Última Consulta | Especialidade',
                    '',
                    '📌 Limpeza e padronização da base:',
                    '• Remoção de duplicatas',
                    '• Validação de números de telefone atuais',
                    '• Correção de inconsistências nos dados',
                    '',
                    '📌 Segmentação da base:',
                    '• Pacientes Inativos (sem atendimento nos últimos 6+ meses)',
                    '• Pacientes Frequentes'
                ],
                delivery: 'Planilha mestra limpa, padronizada e segmentada'
            },
            {
                id: 'a19',
                title: 'Integração e Importação Final no CRM',
                time: '2 dias',
                responsible: 'TI/Gestor',
                tasks: [
                    '📌 Subida da base limpa e segmentada para o CRM',
                    '• Garantia de integridade e consistência dos dados',
                    '• Preparação da base para campanhas de reativação e comunicação segmentada'
                ],
                benefits: [
                    'Controle total da jornada do paciente dentro do CRM',
                    'Dados consistentes e segmentados para ações de marketing, reativação e fidelização',
                    'Recepção capacitada para registrar corretamente novas interações e consultas',
                    'Melhoria da eficiência operacional e da comunicação com pacientes'
                ],
                delivery: 'Base de pacientes pronta, limpa, sem duplicidades, estruturada e pronta para ações de marketing e gestão'
            },
            {
                id: 'a20',
                title: 'Treinamento Prático da Recepção',
                time: '2 dias',
                responsible: 'Gestor',
                tasks: [
                    '📌 Sessão 1: Como cadastrar paciente no CRM (1h)',
                    '📌 Sessão 2: Como usar pipeline e registrar origem (1h)',
                    '📌 Gamificação: Meta diária de 20 cadastros/atualizações',
                    '📌 Placar semanal com premiação'
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
                id: 'a21',
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
                id: 'a22',
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
                id: 'a23',
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
        name: 'Plano de Melhoria de Avaliação Google',
        weeks: 'Semanas 8-13',
        objective: 'Elevar a nota média do Google de 3.7 para 4.3 ⭐ em 6 semanas, garantindo aumento de reputação, engajamento de pacientes e melhoria da percepção de qualidade.',
        icon: '⭐',
        color: '#ef4444',
        justification: 'Com 50+ avaliações existentes, notas baixas diluem rapidamente a média. Meta realista: 0,6 pontos em 6 semanas, equivalente a 0,1 ponto por semana.',
        actions: [
            {
                id: 'a24',
                title: 'Implementação de Sistema de Coleta de Satisfação (CSAT)',
                time: '3 dias',
                responsible: 'TI/Marketing',
                tasks: [
                    '📌 Instalação de ferramenta de CSAT pós-atendimento',
                    '• Registro automático de notas e comentários de pacientes',
                    '• Integração com canais digitais (WhatsApp, e-mail, SMS) para monitoramento contínuo'
                ],
                delivery: 'Sistema CSAT funcionando e integrado. Coleta de feedback de pelo menos 80% dos atendimentos semanalmente.'
            },
            {
                id: 'a25',
                title: 'Automação de Solicitação de Avaliações Google',
                time: '4 dias',
                responsible: 'TI/Marketing/Recepção',
                tasks: [
                    '📌 Envio automático de solicitação para pacientes satisfeitos (CSAT 4-5)',
                    '• Campanha presencial com QR Code na recepção (banner A3)',
                    '• Complemento via e-mail e SMS (opcional)',
                    '',
                    '📌 Timing de envio ideal:',
                    '• Logo após consulta bem-sucedida',
                    '• Após resolução de problema do paciente',
                    '• Quando paciente elogia espontaneamente',
                    '',
                    '📌 Canais utilizados:',
                    '• WhatsApp automático',
                    '• QR Code físico na recepção',
                    '• E-mail (quando disponível)',
                    '• SMS como canal secundário'
                ],
                delivery: 'Automação de solicitações ativa. Campanha presencial com QR Code implementada.'
            },
            {
                id: 'a26',
                title: 'Protocolo de Gestão de Avaliações Negativas',
                time: 'Contínuo',
                responsible: 'Gestor/Atendimento',
                tasks: [
                    '📌 Responder todas as avaliações negativas em até 4 horas úteis',
                    '',
                    '📌 Estrutura da resposta:',
                    '• Agradecer feedback',
                    '• Pedir desculpas genuínas',
                    '• Oferecer solução concreta',
                    '• Convidar paciente para contato direto',
                    '',
                    '📌 Ações internas:',
                    '• Revisar internamente o processo que gerou o problema',
                    '• Realizar follow-up via ligação em 24h quando necessário'
                ],
                delivery: 'Protocolo padronizado e treinado. Todas avaliações negativas respondidas dentro do prazo.'
            },
            {
                id: 'a27',
                title: 'Treinamento da Equipe para Avaliações',
                time: '2 dias',
                responsible: 'Gestor/RH',
                tasks: [
                    '📌 Capacitar a equipe para identificar momentos que geram avaliações positivas',
                    '• Treinar recepção e profissionais em práticas de incentivo à avaliação espontânea'
                ],
                delivery: 'Sessão de treinamento concluída. Checklist de boas práticas aplicado nos atendimentos.'
            },
            {
                id: 'a28',
                title: 'Monitoramento e Validação Semanal',
                time: 'Contínuo (6 semanas)',
                responsible: 'Gestor/Marketing',
                tasks: [
                    '📌 Coleta de métricas semanais para medir progresso:',
                    '• CSAT coletado de 80%+ dos atendimentos',
                    '• 10+ novas avaliações Google positivas por semana',
                    '• 100% das avaliações negativas respondidas',
                    '• Nota média subindo mínimo de 0,1 ponto por semana'
                ],
                benefits: [
                    'Coleta de CSAT automatizada',
                    'Resposta rápida a avaliações negativas',
                    'Engajamento contínuo de pacientes satisfeitos',
                    'Campanhas presenciais e digitais integradas'
                ],
                delivery: 'Relatório semanal com métricas. Meta final: Nota Google 3.7 → 4.3 ⭐ até semana 13.'
            }
        ]
    },
    {
        id: 'semanas-14-16',
        name: 'Otimização de Receita',
        weeks: 'Semanas 14-16',
        objective: 'Aumentar o faturamento da clínica sem aumentar os custos de aquisição, por meio da maximização da ocupação da agenda, reativação de pacientes inativos, programas de indicação e estratégias de upsell inteligentes.',
        icon: '💰',
        color: '#10b981',
        actions: [
            {
                id: 'a29',
                title: 'Auditoria de Horários Ociosos',
                time: '4 dias',
                responsible: 'Gestor/Recepção',
                tasks: [
                    '📌 Mapear todos os horários com menos de 60% de ocupação',
                    '• Criar promoção "Horários Inteligentes" com desconto de 15%',
                    '• Monitorar resultados e ajustar promoções conforme desempenho'
                ],
                delivery: 'Relatório de horários ociosos. Campanha promocional ativa. Ocupação aumentada em 10-15%.'
            },
            {
                id: 'a30',
                title: 'Campanha de Reativação de Pacientes',
                time: '5 dias',
                responsible: 'Marketing/Recepção',
                tasks: [
                    '📌 Segmentar pacientes inativos há mais de 6 meses',
                    '• Criar oferta exclusiva: "Volta pra casa", incentivando o retorno',
                    '• Disparo via WhatsApp e SMS para comunicação direta'
                ],
                delivery: 'Base segmentada. Campanha ativa. Taxa de retorno prevista: 20-30% dos pacientes inativos.'
            },
            {
                id: 'a31',
                title: 'Programa de Indicação',
                time: '3 dias',
                responsible: 'Marketing/Gestor',
                tasks: [
                    '📌 Criar programa onde paciente indica amigo → ambos recebem desconto ou brinde',
                    '• Utilizar QR Code e links rastreáveis para monitoramento de desempenho'
                ],
                delivery: 'Programa implementado. Monitoramento ativo. Expectativa: 5-10% crescimento de novos pacientes.'
            },
            {
                id: 'a32',
                title: 'Upsell Inteligente',
                time: '4 dias',
                responsible: 'Gestor/Atendimento',
                tasks: [
                    '📌 Após cada consulta, sugerir check-up ou exame complementar',
                    '• Oferecer pacotes anuais com desconto (ex.: 4 consultas + exames)',
                    '• Treinar equipe para apresentar oportunidades de upsell de forma natural e persuasiva'
                ],
                projectedImpact: [
                    'Horários ociosos: +10-15% ocupação',
                    'Reativação: 20-30% de pacientes inativos retornando',
                    'Indicação: 5-10% novos pacientes',
                    'Upsell: aumento de 15-25% no ticket médio'
                ],
                checklist: [
                    'Redução de horários ociosos em 30% ou mais',
                    '50+ pacientes inativos reativados',
                    '20+ novos pacientes via indicação',
                    '10%+ dos atendimentos com upsell realizado'
                ],
                delivery: 'Scripts e fluxos implementados. Conversão esperada: 10%+. Ticket médio: +15-25%.'
            }
        ]
    },
    {
        id: 'semanas-17-18',
        name: 'Gestão & Escala',
        weeks: 'Semanas 17-18',
        objective: 'Consolidar processos e preparar próxima fase',
        icon: '📈',
        color: '#8b5cf6',
        actions: [
            {
                id: 'a33',
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
                id: 'a34',
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
                id: 'a35',
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
        <!-- Seção 1: Avaliação Digital -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🌐</span>
                <h3>1. Avaliação Digital</h3>
            </div>
            <div class="digital-evaluation-grid">
                <div class="eval-card google-rating">
                    <div class="eval-icon">⭐</div>
                    <div class="eval-content">
                        <span class="eval-label">Avaliação Google</span>
                        <span class="eval-value">3.7 ⭐</span>
                    </div>
                </div>
                <div class="eval-card website">
                    <div class="eval-icon">🌐</div>
                    <div class="eval-content">
                        <span class="eval-label">Site Oficial</span>
                        <a href="https://clinicavitoriavc.com.br" target="_blank" class="eval-link">clinicavitoriavc.com.br</a>
                    </div>
                </div>
                <div class="eval-card social instagram">
                    <div class="eval-icon">📸</div>
                    <div class="eval-content">
                        <span class="eval-label">Instagram</span>
                        <span class="eval-value">16.000 seguidores</span>
                        <span class="eval-handle">@clinicavitoriavc</span>
                    </div>
                </div>
                <div class="eval-card social facebook">
                    <div class="eval-icon">👥</div>
                    <div class="eval-content">
                        <span class="eval-label">Facebook</span>
                        <span class="eval-value">5.000 seguidores</span>
                        <span class="eval-handle">Clínica Vitória VCA</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Seção 2: Modelo de Negócio -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🏢</span>
                <h3>2. Modelo de Negócio</h3>
            </div>
            <div class="business-model-grid">
                <div class="business-item">
                    <span class="business-label">Tipo:</span>
                    <span class="business-value">Clínica popular, voltada para atendimento médico e exames acessíveis à população sem plano de saúde.</span>
                </div>
                <div class="business-item highlight-mission">
                    <span class="business-label">🎯 Missão:</span>
                    <span class="business-value">Oferecer atendimento humanizado, eficiente e de baixo custo.</span>
                </div>
                <div class="business-item highlight-vision">
                    <span class="business-label">🔭 Visão:</span>
                    <span class="business-value">Tornar-se a maior rede de clínicas populares do sudoeste da Bahia.</span>
                </div>
                <div class="business-item location">
                    <span class="business-label">📍 Localização:</span>
                    <span class="business-value">Rua 2 de Julho, 289, Centro, Vitória da Conquista – BA</span>
                </div>
            </div>
        </div>

        <!-- Seção 3: Estrutura e Serviços -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🏥</span>
                <h3>3. Estrutura e Serviços</h3>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <h4>🩺 Especialidades</h4>
                    <ul>
                        <li>Consultas médicas em diversas áreas</li>
                        <li>Exames laboratoriais</li>
                        <li>Exames de imagem</li>
                    </ul>
                </div>
                <div class="service-card highlight">
                    <h4>⚡ Diferenciais Competitivos</h4>
                    <ul>
                        <li>✅ Agendamento rápido e simplificado</li>
                        <li>✅ Preços acessíveis</li>
                        <li>✅ Alternativa direta ao SUS</li>
                        <li>✅ Alternativa a planos de saúde de alto custo</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Seção 4: Faturamento e Dados Empresariais -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">💰</span>
                <h3>4. Faturamento e Dados Empresariais</h3>
            </div>
            <div class="financial-grid">
                <div class="financial-card cnpj">
                    <div class="financial-icon">📄</div>
                    <div class="financial-content">
                        <span class="financial-label">CNPJ</span>
                        <span class="financial-value">Clínica Vitória Ltda</span>
                        <span class="financial-detail">02.200.214/0004-80</span>
                        <span class="financial-badge">EPP - Empresa de Pequeno Porte</span>
                    </div>
                </div>
                <div class="financial-card revenue">
                    <div class="financial-icon">📊</div>
                    <div class="financial-content">
                        <span class="financial-label">Estimativa de Faturamento Anual</span>
                        <span class="financial-value-range">
                            <span class="min">R$ 360.000</span>
                            <span class="separator">a</span>
                            <span class="max">R$ 4.800.000</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Seção 5: Estrutura Societária e Redes Sociais -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">📱</span>
                <h3>5. Análise de Presença Digital e Estratégia</h3>
            </div>
            <div class="presence-grid">
                <div class="presence-card">
                    <h4>👥 Estrutura Societária</h4>
                    <p>Sociedade LTDA com decisores/sócios definidos</p>
                </div>
                <div class="presence-card">
                    <h4>📸 Instagram/Facebook</h4>
                    <ul>
                        <li>Presença ativa (@clinicavitoriavc)</li>
                        <li>Conteúdo: posts informativos sobre saúde</li>
                        <li>Datas comemorativas</li>
                        <li>Anúncios de especialidades semanais</li>
                        <li>Linguagem direta com CTAs para WhatsApp</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Seção 6: Posicionamento Google (SEO e Local) -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🔍</span>
                <h3>6. Posicionamento no Google (SEO e Local)</h3>
            </div>
            <div class="seo-grid">
                <div class="seo-card positive">
                    <h4>✅ Google Meu Negócio</h4>
                    <p>Forte presença local, altamente relevante para buscas como "clínica popular em Vitória da Conquista"</p>
                </div>
                <div class="seo-card warning">
                    <h4>⭐ Avaliação Google</h4>
                    <span class="rating-display">3.7 ⭐</span>
                    <p>Abaixo do ideal (meta: 4.3+)</p>
                </div>
                <div class="seo-card positive">
                    <h4>📈 SEO Orgânico</h4>
                    <p>Site otimizado para palavras-chave locais:</p>
                    <ul>
                        <li>"exames em Vitória da Conquista"</li>
                        <li>"clínica médica centro VCA"</li>
                    </ul>
                </div>
                <div class="seo-card negative">
                    <h4>⚠️ Limitações SEO</h4>
                    <ul>
                        <li>Domínio genérico (.com.br)</li>
                        <li>Blog com apenas 3 artigos desatualizados</li>
                        <li>Alcance orgânico limitado</li>
                        <li>Baixa autoridade digital</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Seção 7: Concorrência -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🏁</span>
                <h3>7. Análise de Concorrência</h3>
            </div>
            <div class="competition-grid">
                <div class="competition-card direct">
                    <h4>🎯 Concorrentes Diretos</h4>
                    <p class="subtitle">Clínicas Populares / Centros Médicos</p>
                    <ul>
                        <li><strong>Acesso Saúde:</strong> Rede nacional com forte presença local, modelo similar</li>
                        <li><strong>Clínica Saúde Center:</strong> Shopping Conquista Sul, foco em conveniência e horários estendidos</li>
                        <li><strong>Clínica DM Mais:</strong> Consultas acessíveis no centro da cidade</li>
                    </ul>
                </div>
                <div class="competition-card indirect">
                    <h4>🔄 Concorrentes Indiretos</h4>
                    <ul>
                        <li><strong>Hospitais Privados:</strong> Hospital Samur e IBR (público de planos de saúde)</li>
                        <li><strong>Atendimento Público:</strong> Policlínica Regional (concorre via SUS)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Seção 8: Funil de Captação -->
        <div class="diagnostico-section full-width">
            <div class="section-title-bar">
                <span class="section-icon">🎯</span>
                <h3>8. Funil de Captação de Clientes</h3>
            </div>
            <div class="funnel-grid">
                <div class="funnel-stage">
                    <div class="stage-number">1</div>
                    <div class="stage-content">
                        <h4>🗺️ Google Meu Negócio (Porta de Entrada)</h4>
                        <ul>
                            <li>Canal mais forte devido à localização estratégica</li>
                            <li>Buscas: "clínica popular em VCA", "exame de sangue centro"</li>
                            <li>Prova social: avaliações e fotos aumentam confiança</li>
                        </ul>
                    </div>
                </div>
                <div class="funnel-stage">
                    <div class="stage-number">2</div>
                    <div class="stage-content">
                        <h4>📱 Conversão via WhatsApp (Fechamento)</h4>
                        <ul>
                            <li>Canal central de conversão</li>
                            <li>Comunicação rápida e direta</li>
                            <li>Sem formulários complexos</li>
                            <li>Foco na necessidade imediata do paciente</li>
                        </ul>
                    </div>
                </div>
                <div class="funnel-stage warning">
                    <div class="stage-number">3</div>
                    <div class="stage-content">
                        <h4>💸 Tráfego Pago (Inexistente)</h4>
                        <ul class="warning-list">
                            <li>❌ Sem Business Manager no Facebook</li>
                            <li>❌ Sem anúncios ativos ou inativos</li>
                            <li>❌ Possível impulsionamento não estruturado no Instagram</li>
                            <li>❌ Sem anúncios no Google Ads</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Seção: Pontos Fortes e Gargalos (Original melhorado) -->
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
                <li><span class="check">✅</span> Presença ativa em redes sociais (21k+ seguidores)</li>
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

        <!-- Seção 9: Pontos Críticos -->
        <div class="diagnostico-section full-width critical-section">
            <div class="section-title-bar critical">
                <span class="section-icon">🚨</span>
                <h3>9. Pontos Críticos Identificados</h3>
            </div>
            <div class="critical-grid">
                <div class="critical-item">
                    <span class="critical-icon">⚠️</span>
                    <div class="critical-content">
                        <h4>Foco Excessivo na Primeira Consulta</h4>
                        <p>Consulta barata sem funil de upsell para exames complementares ou pacotes anuais</p>
                    </div>
                </div>
                <div class="critical-item">
                    <span class="critical-icon">⚠️</span>
                    <div class="critical-content">
                        <h4>Baixa Retenção Digital</h4>
                        <ul>
                            <li>Site funcional, mas não captura leads</li>
                            <li>Ausência de Tag Manager</li>
                            <li>Ausência de Pixel do Facebook</li>
                        </ul>
                    </div>
                </div>
                <div class="critical-item">
                    <span class="critical-icon">⚠️</span>
                    <div class="critical-content">
                        <h4>Falta de Estratégia de Remarketing</h4>
                        <p>Sem funil de vendas digital estruturado</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Seção 10: Oportunidades de Crescimento -->
        <div class="diagnostico-section full-width opportunities-section">
            <div class="section-title-bar opportunities">
                <span class="section-icon">🚀</span>
                <h3>10. Oportunidades de Crescimento</h3>
            </div>
            <div class="opportunities-grid">
                <div class="opportunity-card">
                    <span class="opportunity-number">1</span>
                    <div class="opportunity-content">
                        <h4>📈 Aumentar Conversão</h4>
                        <p>Otimizar Google Meu Negócio e redes sociais para converter tráfego existente</p>
                    </div>
                </div>
                <div class="opportunity-card">
                    <span class="opportunity-number">2</span>
                    <div class="opportunity-content">
                        <h4>📱 Captação de Leads</h4>
                        <p>Implantar sistema de captação via site e WhatsApp</p>
                    </div>
                </div>
                <div class="opportunity-card">
                    <span class="opportunity-number">3</span>
                    <div class="opportunity-content">
                        <h4>💰 Funil de Upsell</h4>
                        <p>Estruturar promoção de check-ups e exames complementares</p>
                    </div>
                </div>
                <div class="opportunity-card">
                    <span class="opportunity-number">4</span>
                    <div class="opportunity-content">
                        <h4>📢 Campanhas Pagas</h4>
                        <p>Criar campanhas segmentadas no Instagram, Facebook e Google Ads</p>
                    </div>
                </div>
                <div class="opportunity-card">
                    <span class="opportunity-number">5</span>
                    <div class="opportunity-content">
                        <h4>🔄 Remarketing</h4>
                        <p>Implementar tagueamento, Pixel e remarketing para retenção e recorrência</p>
                    </div>
                </div>
            </div>
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

    // Add observations section
    const observations = document.createElement('div');
    observations.className = 'observations-section';
    observations.innerHTML = `
        <div class="observations-header">
            <span class="obs-icon">📋</span>
            <h4>Observações Estratégicas</h4>
        </div>
        <div class="observations-content">
            <p>✅ A presença digital é relevante, mas há espaço para <strong>otimização de avaliações Google</strong> e <strong>engajamento em redes sociais</strong>, considerando o público-alvo popular.</p>
            <p>✅ Estratégias de <strong>marketing digital</strong>, <strong>reativação de pacientes</strong> e <strong>aumento de receita</strong> podem ser estruturadas com base neste diagnóstico.</p>
        </div>
    `;
    container.parentNode.appendChild(observations);
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
                    <span class="kpi-source">Comparativo 18 semanas</span>
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
                        <td><strong>~R$ 6.435</strong></td>
                        <td><strong>18 semanas</strong></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="roi-section">
            <h3>💡 ROI Esperado</h3>
            <div class="roi-grid">
                <div class="roi-card">
                    <span class="roi-label">Investimento</span>
                    <span class="roi-value">R$ 6.435</span>
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
            <p>Após as 18 semanas, com a casa organizada</p>
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
