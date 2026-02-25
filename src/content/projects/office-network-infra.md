---
title: "사무실 이전 네트워크 인프라 설계·구축"
category: "network"
period: "2026.01 - 2026.02"
company: "DevOps 전문기업"
techStack: ["Ubiquiti UniFi", "VLAN", "OpenVPN", "MikroTik", "DNS Failover", "WAN 이중화"]
description: "사무실 이전(여민빌딩) 시 업무망/내부망 VLAN 분리, 듀얼라인 WAN Failover, UniFi AP 기반 무선 인프라 신규 설계·구축"
highlights:
  - "업무망/내부망 완전 분리 VLAN 구조 설계"
  - "듀얼라인 WAN 구성 — 이중화로 속도 향상 및 장애 시 Failover 보장"
  - "WAN/DNS Failover — Health Check 기반 자동 절체 및 Slack/이메일 알림"
  - "Ubiquiti UniFi AP 기반 중앙 관리형 무선 인프라 구축"
  - "VPN을 통한 서버 접근 기본 정책 설계"
---

## 프로젝트 개요

회사 사무실 이전(여민빌딩 5F) 시 전체 네트워크 인프라를 신규 설계하고 구축한 프로젝트. 보안성과 운영 편의성을 동시에 확보하는 것이 목표였으며, 기존 단일 회선 구조에서 이중화 WAN 구조로 전환했다.

**기간**: 2026.01.19 (설계) ~ 2026.02.02 (구축 완료)

## 주요 작업

### 네트워크 망 분리 설계

업무망과 내부 서버망을 완전히 분리하는 VLAN 구조를 설계했다.

| VLAN | 네트워크 대역 | 용도 |
|------|-------------|------|
| OFFICE (10) | 192.168.10.0/24 | 업무·WiFi (직원 단말) |
| SERVER | 내부망 | 서버·인프라 (VPN 접근만 허용) |
| GUEST | 별도 세그먼트 | 방문자 인터넷 전용 |

업무망 SSID는 숨김 처리로 외부 노출 최소화. 서버망은 VPN을 통해서만 접근 가능하도록 기본 정책 수립.

### 듀얼라인 WAN 이중화

두 개의 공인 IP를 각각 DNS A 레코드에 등록하고, 인그레스 서비스가 양쪽 도메인 트래픽을 모두 처리할 수 있도록 구성. 한 회선 장애 시 나머지 회선으로 자동 절체.

### WAN/DNS Failover 자동화

Health Check → CloudWatch Alarm → SNS Topic(Slack + 이메일) 파이프라인으로 장애 감지 및 자동 알림 구성.

- Alarm: `office-skt-down` 발생 시 즉시 SNS 알림
- DNS Failover: Health Check 실패 시 레코드 자동 전환

### 무선 인프라 구축 (Ubiquiti UniFi)

Ubiquiti UniFi AP를 사무실 전 구역에 배포하고 컨테이너 기반 UniFi 컨트롤러로 중앙 관리 체계 구성. AP 핸드오프 기능으로 직원 이동 시 단말이 자동으로 최적 AP에 연결.

### 서버간 고속 연결

서버 간 10G 스위치 연결로 내부 백본 성능 확보. PoE 스위치를 통해 AP 전원 공급 일원화.
