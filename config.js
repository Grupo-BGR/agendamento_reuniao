// Configurações da API do Supabase
// IMPORTANTE: Em produção, essas informações devem ser carregadas de variáveis de ambiente
// ou de um servidor backend para maior segurança

const SUPABASE_CONFIG = {
    url: 'https://cfyncgoohfofzgnbdxjk.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmeW5jZ29vaGZvZnpnbmJkeGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyNjg2OTUsImV4cCI6MjA3MDg0NDY5NX0.Fzy7NGrKQwz5KeG9EWRx08BvNQcOCXdGvVw5-xeW2rw'
};

// Função para obter as configurações
function getSupabaseConfig() {
    return SUPABASE_CONFIG;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
    window.getSupabaseConfig = getSupabaseConfig;
}