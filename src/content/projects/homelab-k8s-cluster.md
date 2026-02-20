---
title: "홈서버 K8s 클러스터 구축"
category: "personal"
period: "2024 - 현재"
company: "개인 프로젝트"
techStack: ["Kubernetes", "Proxmox", "MikroTik", "VLAN", "OpenVPN", "Ansible", "Helm"]
description: "12노드 Kubernetes 클러스터와 MikroTik 기반 네트워크 인프라를 자체 구축·운영"
highlights:
  - "온프레미스 12노드 Kubernetes 클러스터 설계 및 구축"
  - "MikroTik 기반 VLAN 분리 네트워크 설계 (업무/서버/관리/VPN)"
  - "Proxmox 가상화 환경에서 리소스 효율적 운영"
---

## 프로젝트 개요

개인 학습과 실험을 위해 12노드 규모의 온프레미스 Kubernetes 클러스터를 자체 구축하고 운영하는 프로젝트입니다. MikroTik 라우터를 활용한 네트워크 설계부터 Proxmox 가상화, Kubernetes 클러스터 운영까지 인프라 전 레이어를 다루고 있습니다.

## 주요 작업

### 네트워크 설계
MikroTik 라우터를 활용하여 VLAN 기반 네트워크를 설계했습니다. 업무(VLAN 10), 서버(VLAN 20), 관리(VLAN 100), VPN(10.255.0.0/24) 네트워크를 분리하여 보안성과 관리 편의성을 확보했습니다.

### Kubernetes 클러스터 구축
Proxmox 가상화 환경 위에서 12노드 Kubernetes 클러스터를 구축했습니다. 컨트롤 플레인 HA 구성, 워커 노드 오토스케일링, 스토리지 프로비저닝 등 프로덕션급 환경을 구성했습니다.

### 인프라 자동화
MikroTik RouterOS 스크립트와 Ansible을 활용하여 네트워크 및 서버 설정을 자동화했습니다. Helm 차트를 활용한 애플리케이션 배포 관리 체계를 구축했습니다.
