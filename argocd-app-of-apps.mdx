---
title: "ArgoCD App of Apps 패턴으로 배포 자동화하기"
description: "GitOps 기반 배포 자동화를 위해 ArgoCD의 App of Apps 패턴을 도입한 경험을 공유합니다. 기존 30분 이상 소요되던 수동 배포를 5분 이내로 단축한 과정을 다룹니다."
publishDate: 2024-03-15
tags: ["ArgoCD", "GitOps", "Kubernetes", "DevOps"]
draft: false
---

## 배경

블록체인 오라클 프로젝트에서 여러 마이크로서비스를 Kubernetes 위에서 운영하고 있었습니다.
초기에는 각 서비스마다 개별적으로 `kubectl apply`를 실행하는 방식으로 배포했는데,
서비스가 늘어나면서 배포 시간이 30분 이상으로 길어지고 휴먼 에러도 빈번해졌습니다.

## App of Apps 패턴이란?

ArgoCD의 **App of Apps** 패턴은 하나의 "루트" Application이 여러 자식 Application을 관리하는 구조입니다.

```yaml
# root-app.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: root-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/org/infra-apps
    targetRevision: main
    path: apps
  destination:
    server: https://kubernetes.default.svc
    namespace: argocd
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

`apps/` 디렉토리 아래에 각 서비스의 Application 매니페스트를 배치하면,
루트 앱이 자동으로 모든 자식 앱을 생성하고 동기화합니다.

## 디렉토리 구조

```
infra-apps/
├── apps/                    # 루트 앱이 읽는 디렉토리
│   ├── oracle-node.yaml     # 오라클 노드 Application
│   ├── monitoring.yaml      # 모니터링 스택 Application
│   └── ingress.yaml         # Ingress Controller Application
├── charts/                  # 공용 Helm values
│   ├── oracle-node/
│   ├── monitoring/
│   └── ingress/
└── root-app.yaml            # 루트 Application
```

## 적용 결과

| 지표 | Before | After |
|------|--------|-------|
| 배포 시간 | 30분+ | 5분 이내 |
| 휴먼 에러 | 월 2-3건 | 0건 |
| 롤백 시간 | 15분+ | 즉시 (Git revert) |
| 배포 추적 | 수동 기록 | Git 이력 자동 추적 |

## 주의사항

1. **Sync Wave 활용**: 의존성이 있는 리소스는 `argocd.argoproj.io/sync-wave` 어노테이션으로 배포 순서를 제어해야 합니다.
2. **Health Check 커스터마이징**: CRD 기반 리소스는 기본 Health Check가 동작하지 않을 수 있어 커스텀 Health Check를 정의해야 합니다.
3. **Secret 관리**: Git에 시크릿을 직접 저장하지 말고 Sealed Secrets나 External Secrets Operator를 활용하세요.

## 마무리

App of Apps 패턴은 GitOps의 핵심 원칙인 "Git을 Single Source of Truth로" 를 실현하는 효과적인 방법입니다.
배포 자동화뿐 아니라 인프라의 버전 관리, 감사 추적, 재현성까지 확보할 수 있어
프로덕션 환경에서도 적극 추천합니다.
