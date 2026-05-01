const consultingData = {
    hero: {
        name: "Raju P. Gadiraju",
        title: "Enterprise Architect: Healthcare, Finance & AI",
        tagline: "Bridging the gap between complex business needs and scalable technology.",
        bio: "I am Raju, an Enterprise Architect who bridges the gap between executive business strategy and deep, hands-on engineering. My primary focus is transforming healthcare - architecting scalable revenue cycle platforms, administrative workflows, and secure, enterprise-wide clinical systems. <br><br>Beyond high-level strategy, I am a highly accomplished engineer specializing in production-grade GenAI systems, sophisticated RAG pipelines, and high-performance multi-cloud infrastructure (AWS, Azure, GCP). By leveraging my extensive background in legacy financial modernization and optimizing large-scale AI training on NVIDIA DGX clusters, I build robust, scalable intelligence platforms that solve mission-critical challenges across both the healthcare, finance and AI.",
        photoSrc: "Artifacts/Prasad.jpeg" 
    },
    contact: {
        email: "gadiraju@ieee.org",
        phone: "813-378-6199",
        linkedinUrl: "https://linkedin.com/in/pgadiraj",
        linkedinDisplay: "linkedin.com/in/pgadiraj",
        location: "Fremont, CA & Erie, PA",
        mediaKitLink: "raju_media_kit.pdf" 
    },
    services: [
        {
            icon: "🏥",
            title: "Healthcare Systems Architecture",
            description: "Architecture for revenue cycle, admin, and clinical platforms. Familiarity with healthcare interoperability standards including HL7 / FHIR, EHR/EMR, Revenue Cycle Management (RCM), and HIPAA compliance."
        },
        {
            icon: "🏗️",
            title: "Enterprise Architecture",
            description: "End-to-end multi-cloud infrastructure design across AWS, Azure, and GCP. Secure, scalable Kubernetes (EKS, AKS) deployments, CI/CD automation, and MLOps lifecycle management."
        },
        {
            icon: "⚡",
            title: "NVIDIA HPC Infrastructure",
            description: "Optimization of multi-node NVIDIA DGX (H100/A100) clusters. Deep expertise in TensorRT, Triton, vLLM, and Slurm scheduling to maximize hardware utilization and minimize inference latency."
        },
        {
            icon: "🧠",
            title: "Claude & LLM Integration",
            description: "Strategic implementation of Anthropic's Claude, GPT-4, and open-source models into production. Building high-accuracy RAG pipelines, fine-tuning, and robust evaluation frameworks."
        },
        {
            icon: "🤖",
            title: "Cloud Agentic AI",
            description: "Designing autonomous and semi-autonomous multi-agent systems using LangGraph and CrewAI. Implementing hierarchical supervisor-worker architectures and secure enterprise tool integrations."
        },
        {
            icon: "💻",
            title: "Custom AI Development",
            description: "Full-cycle engineering of AI applications. From developing Golang gRPC microservices and Model Context Protocol (MCP) servers to building secure, scalable backend data pipelines."
        },
        {
            icon: "🤝",
            title: "Strategic Consulting",
            description: "Advising CTOs and Engineering leadership on AI roadmaps, vendor selection, infrastructure cost-optimization, and technical debt mitigation in legacy-to-AI modernizations."
        },
        {
            icon: "🏦",
            title: "Financial Legacy Modernization",
            description: "Migrating legacy monolithic systems (1000+ COBOL financial systems) to Java/Spring Boot and C# .NET. Utilizing fine-tuned CodeBERT and GraphCodeBERT models for business logic extraction."
        },
        {
            icon: "🔄",
            title: "Systems Integration",
            description: "Designing integrations across complex enterprise landscapes. API strategy, middleware, event-driven architectures (Kafka, Airflow), and end-to-end EA frameworks including TOGAF and ArchiMate."
        }
    ],
    skills: [
        {
            cat: "GPU / HPC",
            items: [
                "NVIDIA CUDA Toolkit", "cuBLAS", "cuDNN", "NCCL", "Thrust/CUB", "TensorRT", 
                "Triton Inference Server", "vLLM", "FAISS-GPU", "Nsight Compute", "Nsight Systems", 
                "nvprof/NVTX", "compute-sanitizer", "DCGM", "nvidia-smi", "Slurm", "MIG", "MPS", 
                "Temporal Time-Slicing", "Enterprise vGPU", "NVLink/NVSwitch", "DGX SuperPOD", 
                "PagedAttention", "RAPIDS cuDF/cuML/cuGraph", "NVIDIA Container Toolkit", 
                "NVIDIA GPU Operator", "RunAI", "NVIDIA Mission Control (BCM)", "NGC Container Registry", 
                "Spectrum-X Ethernet", "BlueField DPUs", "GPFS/Lustre", "NVIDIA Omniverse", 
                "HPE ProLiant AI Compute", "HPE iLO", "Liquid Cooling"
            ]
        },
        {
            cat: "IBM Mainframes & Ecosystem",
            items: [
                "COBOL", "JCL", "DB2", "DB2 for z/OS", "Control-M", "IBM Watsonx", 
                "ADDI (Application Dependency Discovery Insights)", "z/OS", "zLinux", 
                "RACF", "ACF2", "CICS", "IMS", "AS/400", "Synon", "IBM Cloud", "API Connect", "MQ"
            ]
        },
        {
            cat: "Programming Languages",
            items: [
                "Golang", "Python", "C", "C++", "Java", "COBOL", "SQL", "PL/SQL", 
                "SparkSQL", "Shell", "Bash", "Perl"
            ]
        },
        {
            cat: "Agentic AI & RAG",
            items: [
                "LangGraph", "LangChain", "CrewAI", "Semantic Kernel", "AutoGen", 
                "AWS Bedrock Agents", "Azure AI Agent Service", "GCP Vertex AI Agent Builder", 
                "Model Context Protocol (MCP)", "OpenAI Functions", "FAISS", "Pinecone", 
                "ChromaDB", "Weaviate", "RAGAS", "DeepEval", "LangSmith", "Langfuse", 
                "Prompt Engineering", "Vector Databases", "RLHF"
            ]
        },
        {
            cat: "AI/ML Platforms",
            items: [
                "AWS SageMaker", "AWS Bedrock", "Azure OpenAI", "Azure AI Foundry", 
                "Azure AI Agent Service", "Azure ML", "GCP Vertex AI", "Vertex AI Gemini", 
                "IBM Watsonx", "Hugging Face", "OpenAI API", "MLflow", "Kubeflow", 
                "NVIDIA NIM", "Weights & Biases"
            ]
        },
        {
            cat: "ML Frameworks & Models",
            items: [
                "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", 
                "CodeBERT", "GraphCodeBERT", "CodeT5", "Semantic Kernel", "AutoGen", 
                "ONNX", "TensorRT", "Ray", "Optuna", "TFX", "DeepSpeed", "FSDP", 
                "AutoML", "XGBoost", "LightGBM", "CatBoost", "LSTM", "Seq2Seq", 
                "FastText", "SentencePiece"
            ]
        },
        {
            cat: "AWS",
            items: [
                "IAM", "TGW", "EC2", "S3", "CloudFront", "CDN", "CloudFormation", 
                "RDS", "EKS", "VPC", "NAT", "WAF", "KMS", "ACM", "SG", "ECR", "EBS", 
                "EFS", "ECS", "Fargate", "Bedrock", "Bedrock Agents", "Route 53", 
                "CodePipeline", "CodeBuild", "CodeDeploy", "Direct Connect", "SageMaker", 
                "Rekognition", "Textract", "Transcribe", "Polly", "Comprehend", "Lex", 
                "Translate", "Athena", "Glue", "Redshift", "Lambda", "Kinesis", 
                "QuickSight", "App Mesh", "Step Functions", "Inferentia", "Q Developer", 
                "AWS Batch", "AWS Autopilot"
            ]
        },
        {
            cat: "Azure",
            items: [
                "AD", "IAM", "AKS", "Blob Storage", "ARM/Bicep", "CDN", "Azure OpenAI", 
                "Azure AI Agent Service", "ADF", "Azure Databricks", "Key Vault", 
                "Azure Monitor", "Azure DNS", "SQL Database", "VNet", "NAT Gateway", 
                "ExpressRoute", "Private Endpoint", "Service Fabric", "ADLS", "Functions", 
                "Logic Apps", "Cosmos DB", "Service Bus", "Azure ML", "Cognitive Services", 
                "Container Registry", "App Service", "API Management", "Application Gateway", 
                "Load Balancer", "Security Center", "Azure AutoML", "Resource Manager"
            ]
        },
        {
            cat: "GCP",
            items: [
                "IAM", "GKE", "Compute Engine", "Cloud Storage", "BigQuery", "Looker", 
                "Vertex AI", "Vertex AI Agent Builder", "Gemini", "Cloud Build", 
                "Cloud Composer", "Cloud Deployment Manager", "Anthos", "Service Mesh", 
                "App Engine", "Cloud Functions", "Cloud Run", "Pub/Sub", "Dataflow", 
                "Firestore", "Bigtable", "Spanner", "Cloud DNS", "Cloud KMS", 
                "Secret Manager", "Container Registry", "Firebase", "StackDriver", 
                "Cloud Load Balancing", "Cloud Monitoring", "Cloud Logging", "Storage Transfer Service"
            ]
        },
        {
            cat: "OCI",
            items: [
                "IAM", "Compute", "Object Storage", "Monitoring & Logging", 
                "Database Services", "OKE", "Data Integration", "Oracle Integration Cloud", 
                "Autonomous Data Warehouse", "Multicloud Services"
            ]
        },
        {
            cat: "Container & Orchestration",
            items: [
                "Docker", "Kubernetes", "Helm", "ArgoCD", "Istio", "Ingress", "Calico", 
                "Trivy", "Snyk", "Ranger", "RBAC", "Rancher", "Flannel", "Slurm HPC", 
                "KubeFlow", "KubeVirt", "Mesos", "Protobuf/gRPC", "GitOps"
            ]
        },
        {
            cat: "DevOps & Observability",
            items: [
                "Git", "GitHub Actions", "GitLab", "Bitbucket", "Perforce", "SVN", 
                "Azure DevOps", "Jenkins", "Bamboo", "Terraform", "Terraform Enterprise", 
                "Vault", "Ansible", "Chef", "Puppet", "Backstage", "Maven", "Gradle", 
                "Nexus", "Prometheus", "Grafana", "Jaeger", "ELK", "Splunk", "Solr", 
                "Lucene", "SonarQube", "Selenium", "VeraCode", "AppDynamics", "Dynatrace", 
                "Sensu", "Nagios", "Zabbix", "CloudWatch", "SOC2", "PCI-DSS"
            ]
        },
        {
            cat: "Data & Databases",
            items: [
                "Kafka", "Flink", "Airflow", "Control-M", "Oozie", "MapReduce", "Databricks", 
                "Snowflake", "Hadoop", "HDFS", "Oracle", "PostgreSQL", "MySQL", "Sybase", 
                "DB2", "MemSQL", "Teradata", "MongoDB", "Cassandra", "Redis", "Graph DB"
            ]
        }
    ],
    resume: [
        {
            role: "Software Consultant / Infrastructure Engineer",
            company: "Ema Unlimited",
            date: "Apr 2024 – Present",
            logo: "Artifacts/ema.jpeg",
            details: [
                "Built production RAG pipelines on Azure AI Search and Pinecone using hybrid retrieval and cross-encoder reranking, ensuring high accuracy and sub-second latency.",
                "Developed sophisticated MCP servers in Golang to connect autonomous agents to Salesforce, ServiceNow, and Jira with secure RBAC and schema versioning.",
                "Profiled AI workloads across NVIDIA DGX H100/A100 clusters using Nsight Systems and DCGM; built optimized edge AI inference systems using TensorRT."
            ]
        },
        {
            role: "Senior Consultant / Cloud Systems Engineer",
            company: "Fidelity Investments",
            date: "Jun 2023 – Apr 2024",
            logo: "Artifacts/fidelity.png",
            details: [
                "Architected robust LLM inference services (GPT-4, Claude, Gemini) on SageMaker, Bedrock, and Azure ML using FastAPI, Celery, and auto-scaling AKS/EKS.",
                "Built distributed ML pipelines with PyTorch DDP and TensorFlow across multi-node GPU clusters, tracking experiments via MLflow.",
                "Trained NLP pipelines to extract critical business logic from legacy JCL and Control-M environments for automated mainframe modernization analysis."
            ]
        },
        {
            role: "Senior Principal Consultant",
            company: "Genpact Digital & HPE Labs AI ML JV Team",
            date: "Aug 2019 – May 2023",
            logo: "Artifacts/genpact.png",
            details: [
                "Integrated HPE ProLiant Compute XD685 (AMD EPYC/Instinct MI325X) for optimized high-density rack deployments and HPC efficiency.",
                "Built complex aviation risk assessment data pipelines integrating GCP, AWS, Azure, and Oracle Autonomous Database, leveraging Airflow for microservice orchestration.",
                "Designed and implemented synthetic data pipelines to evaluate AI models under realistic and edge-case conditions, improving model robustness and reliability."
            ]
        },
        {
            role: "Senior Platform Engineer",
            company: "Franklin Templeton",
            date: "Jul 2018 – Jul 2019",
            logo: "Artifacts/franklin.png",
            details: [
                "Architected an Azure Data Lake leveraging HDInsight, AKS, and Spark, establishing automated CI/CD pipelines and Apache Airflow orchestration for Fund Manager dashboards.",
                "Configured secure Azure Databricks environments integrating Active Directory (AD DS), Private Link, and Key Vault for enterprise credential management.",
                "Developed a highly scalable GCP-based conversational AI chatbot utilizing Pub/Sub, Dataflow, Firestore, and BigQuery for real-time analytics."
            ]
        },
        {
            role: "Principal Infra Developer",
            company: "Cognizant Technologies",
            date: "Jul 2016 – Feb 2018",
            logo: "Artifacts/cognizant.png",
            details: [
                "Engineered an AWS-based high-throughput data platform for HBO Live Stream, utilizing Kafka and containerized microservices to optimize real-time event ingestion.",
                "Modernized enterprise data pipelines on Microsoft Azure, integrating Databricks, Azure Data Factory, and Informatica ETL for secure, cross-layer data orchestration."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Oracle",
            date: "Nov 2010 – Jun 2016",
            logo: "Artifacts/oracle.png",
            details: [
                "Spearheaded big data integration for the Oracle Fusion Product Family across the Hadoop ecosystem (Hive, HBase, Oozie, ZooKeeper).",
                "Provisioned and optimized enterprise-scale hardware and software environments, including Oracle Exadata, Exalogic, and Cloudera platforms.",
                "Managed mission-critical DB2 and DB2 for z/OS database environments, ensuring high availability and seamless integration for Siebel CRM applications."
            ]
        },
        {
            role: "SQA Engineer",
            company: "Symantec / Veritas",
            date: "Jun 2008 – Nov 2010",
            logo: "Artifacts/symantec.jpeg",
            details: [
                "Architected High Availability and Disaster Recovery (HA/DR) solutions for Oracle RAC, Sybase, and DB2 clusters across diverse Unix/Linux environments.",
                "Integrated Veritas Clustered File Systems with enterprise SAN/NAS/NetApp storage volumes for optimal data consistency and reliability.",
                "Developed comprehensive Python and Shell automation scripts to streamline database deployment, monitoring, and disaster recovery processes."
            ]
        }
    ],
    caseStudies: [
        {
            title: "RCM Platform Architecture for Multi-Site Practice",
            category: "HEALTHCARE · REVENUE CYCLE SYSTEMS",
            context: "Multi-site group",
            scale: "8 locations",
            duration: "6 months",
            problem: "A growing primary care group was managing claims across disconnected systems, causing reconciliation errors and delayed payments. Designed a unified RCM architecture with a central data model, integrated clearinghouse connectivity, and automated denial workflows.",
            solution: "Reduced claims denial rate by 34% and cut claims processing time from 18 to 9 days."
        },
        {
            title: "EHR Integration & Patient Flow Redesign",
            category: "HEALTHCARE · ADMIN SYSTEMS",
            context: "DPC Practice",
            scale: "Startup",
            duration: "3 months",
            problem: "A new direct primary care practice needed to choose and integrate an EHR with membership payments and patient communication tools. Led vendor evaluation, defined integration architecture, and documented the target-state data flows before any implementation began.",
            solution: "Avoided costly mid-implementation pivot; practice launched on time with clean system boundaries."
        },
        {
            title: "Healthcare Admin Platform Migration",
            category: "ENTERPRISE · LEGACY MODERNIZATION",
            context: "Health System",
            scale: "Enterprise",
            duration: "12 months",
            problem: "Led the architecture workstream for migrating a legacy on-premise admin platform to a cloud-based system. Defined current and target state, managed stakeholder alignment across clinical, finance, and IT, and established integration patterns for 14 connected systems.",
            solution: "Zero-downtime cutover; all 14 integrations live on day one."
        },
        {
            title: "System Blueprint for Healthcare Startup",
            category: "ENTERPRISE · EARLY STAGE",
            context: "Seed-stage startup",
            scale: "Pre-build",
            duration: "6 weeks",
            problem: "Engaged pre-product to help a healthcare founder think through their technical architecture. Produced a system context diagram, data flow maps, platform selection criteria, and a phased build roadmap aligned to their funding milestones.",
            solution: "Architecture document used to align technical co-founder and inform Series A conversations."
        },
        {
            title: "Financial Systems AI Modernization",
            category: "FINANCE · LEGACY MODERNIZATION",
            context: "Fidelity Investments",
            scale: "1000+ Legacy Systems",
            duration: "10 months",
            problem: "Need for intelligent COBOL-to-Java/C# code transformation and business logic extraction from legacy JCL and Control-M environments.",
            solution: "Engineered fine-tuned CodeBERT and GraphCodeBERT models. Deployed RAG systems using legacy codebase and financial rules for LLM-guided modernization recommendations with 95% semantic accuracy."
        },
        {
            title: "Agentic AI Workflow for GPI Reclassification",
            category: "HEALTHCARE · AGENTIC AI & AUTOMATION",
            context: "Enterprise PBM (OptumRx / RxCLAIM)",
            scale: "12,700+ records/cycle",
            duration: "Cycle reduced from 8 weeks to 1-2 weeks",
            problem: "Manual GPI reclassification and NDC mapping across RxCLAIM systems took up to 8 weeks and cost $1.5M annually. Mapping errors caused $630K in yearly remediation and disrupted care for 65,000+ members via claim denials.",
            solution: "Architected a 3-agent Azure AI platform (GPT-4 & Azure ML) to automate ingestion, client segmentation, and batch orchestration. Blended deterministic rules with dynamic LLM reasoning and Human-in-the-Loop (HITL) quality gates, achieving an 84% reduction in cycle effort and a 326% 3-year ROI."
        }
    ],
    research: [
        {
            title: "Design of Real-Time Compute Model",
            venue: "IEEE Publication",
            description: "Optimizing Architecture Using RAG and Tiny-BERT Models for high-efficiency, low-latency deployments."
        },
        {
            title: "Edge AI Consensus: Blockchain-Secured Federated Learning for Trustless Intelligence Network",
            venue: "ECPDC 2025 (ACM)",
            date: "December 2025",
            doi: "10.1145/3744504.3744519",
            description: "A novel framework combining blockchain technology with federated learning for trustless collaboration of edge devices, employing a reputation-based consensus mechanism to filter malicious contributions."
        },
        {
            title: "Project Nanda",
            venue: "MIT Media Lab Contributor",
            description: "Architecting the Internet of AI Agents. Led the design and implementation of a Kubernetes-native automation control plane for air-gapped GDC deployments."
        },
        {
            title: "Automated Feature Pipelines for LLM-Based Executive Intelligence Systems in Hybrid Cloud Environments",
            venue: "IEEE ICCTDC 2025",
            date: "July 2025",
            doi: "10.1109/ICCTDC64446.2025.11158738",
            description: "A framework that integrates automated feature pipelines into LLM-based executive intelligence systems, enabling scalable data organizing, feature selection, and modification for hybrid cloud deployment."
        },
        {
            title: "Federated Learning Meets Swarm Intelligence: A Privacy-Centric Framework for Big Data Processing",
            venue: "IEEE GINOTECH 2025",
            date: "May 2025",
            doi: "10.1109/GINOTECH63460.2025.11076871",
            description: "Blends Federated Learning (FL) and Swarm Intelligence (SI) techniques like Particle Swarm Optimization (PSO) and Ant Colony Optimization (ACO) to tackle privacy, scalability, and real-time processing in big data analytics."
        },
        {
            title: "Federated-Aware Cluster Computing for Resilient and Scalable Machine Learning",
            venue: "IEEE ICOCT 2025",
            date: "June 2025",
            doi: "10.1109/ICOCT64433.2025.11118503",
            description: "Introduces the FACC framework to align decentralized federated computation with high-performance cluster and grid infrastructure, achieving resilient model aggregation and fault-tolerant node coordination."
        },
        {
            title: "DataOps Meets LLMOps: Automating Cloud-Based AI Workflows from Data Ingestion to Prompt Optimization",
            venue: "IEEE ICDICI 2025",
            date: "July 2025",
            doi: "10.1109/ICDICI66477.2025.11135202",
            description: "A unified framework that bridges DataOps and LLMOps to automate end-to-end cloud-based AI workflows, from raw data processing to continuous prompt optimization for Large Language Models."
        }
    ],
    engagements: [
        {
            step: "01",
            type: "Architecture Discovery & Assessment",
            model: "FIXED SCOPE",
            details: "Engaging to define current state architecture and assess complex enterprise landscapes before committing to technology."
        },
        {
            step: "02",
            type: "System Blueprint for Startup",
            model: "FIXED SCOPE",
            details: "Engaged pre-product to produce a system context diagram, data flow maps, platform selection criteria, and a phased build roadmap aligned to funding milestones."
        },
        {
            step: "03",
            type: "Fractional EA Advisory",
            model: "ONGOING",
            details: "Ongoing architectural leadership. Defining current and target state, roadmaps, and governance models for complex organizations."
        }
    ]
};
