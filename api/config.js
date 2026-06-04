// Vercel Serverless Function - 安全提供 API Key
// 访问地址: /api/config

export default function handler(req, res) {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    // 从环境变量读取 API Key（服务端安全）
    const config = {
        API_KEY: process.env.DEEPSEEK_API_KEY || '',
        API_URL: 'https://api.deepseek.com/chat/completions'
    };
    
    res.status(200).json(config);
}
