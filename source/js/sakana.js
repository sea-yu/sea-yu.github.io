// 加载Sakana
loadExternalResource('https://cdn.jsdelivr.net/npm/sakana', 'js').then(() => {
    const sakanaBox = document.createElement('div');
    sakanaBox.id = 'sakana-box';
    document.body.appendChild(sakanaBox);

    Sakana.setMute(true);

    Sakana.init({
        // 选项: 默认值
        el: '#sakana-box',     // 启动元素 node 或 选择器
        character: 'takina',          // 启动角色 'chisato','takina' 
        inertia: 0.01,              // 惯性
        decay: 0.99,              // 衰减
        r: 60,                // 启动角度
        y: 10,                // 启动高度
        scale: 0.4,                 // 缩放倍数
        translateY: 0,                 // 位移高度
        mute: true,
        canSwitchCharacter: false,     // 允许换角色
    });
})
