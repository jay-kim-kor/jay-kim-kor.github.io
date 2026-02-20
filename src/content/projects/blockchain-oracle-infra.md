---
title: "블록체인 오라클 인프라 운영"
category: "infra"
period: "2023.06 - 2024.06"
company: "블록체인 스타트업"
techStack: ["GCP", "Kubernetes", "ArgoCD", "Helm", "Terraform", "Prometheus", "Grafana"]
description: "블록체인 오라클 프로젝트의 GCP 기반 인프라 운영 및 배포 자동화"
highlights:
  - "ArgoCD App of Apps 아키텍처 도입으로 배포 시간 70% 단축 (30분 → 5분)"
  - "24/7 온콜 체계 운영, 서비스 SLA 99.9% 유지"
  - "Helm/Terraform 기반 인프라 버전 관리 체계 수립"
---

## 프로젝트 개요

블록체인 생태계의 오라클 솔루션 인프라를 GCP 기반으로 운영한 프로젝트입니다. Kubernetes 클러스터 위에서 오라클 노드를 안정적으로 운영하고, 배포 자동화와 모니터링 체계를 구축했습니다.

## 주요 작업

### ArgoCD App of Apps 아키텍처
GitOps 기반 배포 자동화를 위해 ArgoCD의 App of Apps 패턴을 도입했습니다. 기존 30분 이상 소요되던 수동 배포를 5분 이내로 단축하여 배포 시간을 70% 줄였습니다.

### IaC 체계 수립
Helm Chart와 Terraform을 활용한 인프라 버전 관리 체계를 수립했습니다. 인프라 변경 사항을 코드로 관리하여 재현성과 감사 추적성을 확보했습니다.

### 장애 대응 체계
24/7 온콜 체계를 운영하며 블록체인 오라클 서비스의 SLA 99.9%를 유지했습니다. Prometheus/Grafana 기반 모니터링으로 장애를 신속히 감지하고 대응했습니다.
