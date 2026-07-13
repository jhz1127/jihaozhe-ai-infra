const projects = [
  {
    number: "01",
    title: "分离式 DataLoader",
    subtitle: "让数据供给不再阻塞 GPU",
    tags: ["RDMA", "GPUDirect", "Ray", "PyTorch"],
    result: "31.1k → 41.1k samples/s",
    detail: "设计 M×N Producer/Consumer 架构，分离控制面与数据面；以 one-sided RDMA READ + GPUDirect RDMA 直达 GPU HBM，使训练主线程与数据拉取流水并行。",
  },
  {
    number: "02",
    title: "Token Budget Batching",
    subtitle: "以 token 而非样本数均衡计算",
    tags: ["Qwen3", "ZeRO-1", "BF16", "FlashAttention"],
    result: "4B 模型 MFU 46.84%",
    detail: "独立实现基于 token budget 的动态组批与向量化切分路径，消除变长序列带来的 step 拖尾，在 B200 上显著提升训练吞吐。",
  },
  {
    number: "03",
    title: "OxygenTensor 通信底座",
    subtitle: "跨节点 Tensor 高速传输",
    tags: ["CUDA VMM", "FatPtr", "NCCL", "C++"],
    result: "GPU HBM 直通 RDMA",
    detail: "参与存储管理与通信调度双引擎建设，打通 CUDA VMM、GPUDirect RDMA、HBM staging 与 SHM 多路径，为分布式训练提供传输底座。",
  },
  {
    number: "04",
    title: "APS 排程系统",
    subtitle: "领域知识驱动的组合优化",
    tags: ["C++20", "MLCLSP", "启发式", "优化"],
    result: "94.7% 胜率 · 152/152 零违规",
    detail: "针对十余种工业约束，构建 Attributes/State 快照回滚模型与 Chain Tracking 算法；144/152 算例优于 8 线程商用求解器。",
  },
];

const skills = [
  "C++ / Python", "PyTorch / DataLoader", "RDMA / GPUDirect", "分布式训练", "CUDA VMM", "Linux 并发", "ZeRO / FlashAttention", "性能诊断",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top">吉皓哲</a>
        <div className="nav-links">
          <a href="#projects">代表项目</a>
          <a href="#experience">经历</a>
          <a href="#about">关于我</a>
        </div>
        <a className="nav-cta" href="/吉皓哲-简历.pdf" download>下载简历 <span>↓</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI INFRASTRUCTURE ENGINEER · 2026</p>
          <h1>让训练系统<br />更快地<span>流动。</span></h1>
          <p className="intro">吉皓哲，专注于大模型训练数据链路、分布式通信与高性能系统工程。从 GPU 数据供给到跨节点 Tensor 传输，把复杂的性能问题变成可验证的结果。</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">查看代表项目 <span>↘</span></a>
            <a className="button text" href="mailto:hzji1127@foxmail.com">联系我 <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="核心能力">
          <div className="panel-top"><span>系统能力图谱</span><span className="live"><i /> AVAILABLE</span></div>
          <div className="diagram">
            <div className="diagram-line line-one" />
            <div className="diagram-line line-two" />
            <div className="node node-a">DATA</div><div className="node node-b">RDMA</div><div className="node node-c">GPU</div><div className="node node-d">TRAIN</div>
          </div>
          <div className="panel-caption"><span>数据供给</span><b>→</b><span>高速传输</span><b>→</b><span>训练吞吐</span></div>
        </aside>
      </section>

      <section className="metrics" aria-label="量化成果">
        <div><strong>+32%</strong><span>分离式 DataLoader 吞吐提升</span></div>
        <div><strong>46.84%</strong><span>Qwen3 4B 训练 MFU</span></div>
        <div><strong>+22.8%</strong><span>4B 模型 tokens/s 提升</span></div>
        <div><strong>94.7%</strong><span>排程算法全局胜率</span></div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>把瓶颈变成<br />可量化的增益。</h2></div><p>从底层数据面到训练策略，所有工作都围绕一个目标：让算力真正用于计算。</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <p className="project-subtitle">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <p className="project-detail">{project.detail}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-result"><span>RESULT</span><strong>{project.result}</strong></div>
          </article>)}
        </div>
      </section>

      <section className="experience section" id="experience">
        <div><p className="eyebrow">EXPERIENCE</p><h2>在真实系统里<br />解决真实问题。</h2></div>
        <div className="timeline">
          <article><p>2025 — 至今</p><div><h3>京东零售 · AI Infra 与大数据部</h3><h4>AI Infra 算法工程师</h4><p>负责大模型训练样本引擎与数据链路优化，覆盖动态组批、断点续训、DataLoader 性能诊断及 RDMA 分离式数据供给。</p></div></article>
          <article><p>2023 — 2026</p><div><h3>华中科技大学（985）</h3><h4>计算机技术 · 硕士</h4><p>聚焦高性能计算、分布式系统与工程优化。</p></div></article>
          <article><p>2019 — 2023</p><div><h3>西安电子科技大学（211）</h3><h4>通信工程 · 本科</h4><p>夯实系统、通信与软件工程基础。</p></div></article>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-copy"><p className="eyebrow">TOOLBOX</p><h2>系统视角，<br />工程落地。</h2><p>熟悉从 Python 训练栈到 C++ 通信与系统层的完整路径；擅长定位长尾、拆解瓶颈，并用实验验证每一项优化。</p><a className="button primary" href="/吉皓哲-简历.pdf" download>下载完整简历 <span>↓</span></a></div>
        <div className="skill-list">{skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span>{skill}</div>)}</div>
      </section>

      <footer><div><a className="brand" href="#top">吉皓哲</a><p>AI Infrastructure · 分布式训练 · 高性能数据系统</p></div><div className="footer-contact"><a href="mailto:hzji1127@foxmail.com">hzji1127@foxmail.com</a></div></footer>
    </main>
  );
}
