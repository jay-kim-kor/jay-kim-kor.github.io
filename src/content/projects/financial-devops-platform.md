---
title: "금융권 DevOps 플랫폼 구축"
category: "devops"
period: "2025.08 - 2026.02"
company: "DevOps 전문기업"
techStack: ["GitLab", "GitLab CI/CD", "n8n", "Prometheus", "Grafana", "Loki", "Keycloak", "Vault", "Mattermost", "Nginx", "Solar Pro vLLM"]
description: "인터넷전문은행의 DevOps 전환을 위한 GitLab 기반 CI/CD 플랫폼 및 DevOps 도구셋 7종 설계·구축. 7개 시스템, 28개 Repository, 110명+ 개발자 대상 SVN→Git 전환 및 AI 코드리뷰 자동화."
highlights:
  - "SVN→Git 전환: 7개 시스템, 28개 Repo, 110명+ 개발자 대상 전면 마이그레이션"
  - "DevOps 도구셋 7종 구축: GitLab, Mattermost, n8n, Grafana/Loki/Prometheus, Keycloak, Vault"
  - "n8n 자동화 워크플로 4종: 라이선스 관리, 권한 자동 처리(EAI DB 연동), AI 코드리뷰, 알림"
  - "GitLab Runner 기반 표준 파이프라인 설계, 5개 시범 부서 100% 적용"
  - "폐쇄망(에어갭) 환경에서 GitLab 17.8.7 → 17.11.7 업그레이드 수행"
---

## 프로젝트 개요

인터넷전문은행의 DevOps 전환을 위한 GitLab 기반 통합 플랫폼 구축 프로젝트. SVN 기반 레거시 형상관리 체계를 Git으로 전환하고, CI/CD 파이프라인 표준화·Observability 스택·자동화 워크플로를 일괄 구축했다. 금융권 폐쇄망(에어갭) 환경이라는 제약 하에 6개월간 수행.

**규모**: 7개 시스템, 28개 Repository, 110명+ 개발자

## 주요 작업

### DevOps 도구셋 7종 구축

5대 VM 기반 컨테이너 환경(Production/Development Zone 분리)에 다음 도구를 전체 설계·구축했다:

| 도구 | 역할 |
|------|------|
| GitLab + Runner | 형상관리, CI/CD 파이프라인 |
| Mattermost | 협업·배포 알림 허브 |
| n8n | 워크플로 자동화 엔진 |
| Grafana + Prometheus + Loki | 통합 모니터링/로그 스택 |
| Keycloak | SSO + OTP 2FA (통합 인증) |
| Vault | 시크릿·자격증명 중앙 관리 |
| Solar Pro vLLM | AI 코드리뷰 (MR 자동 분석) |

### SVN → Git 형상관리 전환

레거시 SVN 체크아웃 방식을 GitLab Runner git fetch/checkout 기반으로 전면 전환. 전환 대상:

- **프론트엔드 3개 시스템**: 채널SPA(3개), 기업뱅킹(6개), 개인뱅킹(7개) Repository
- **백엔드 4개 시스템**: 방카슈랑스(5개), 계정계 프레임워크(5개), 트레저리(1개), 형상관리(1개) Repository

방카슈랑스 시스템은 전체 빌드가 불가한 구조 → 증분 빌드 로직을 직접 설계·구현.

### CI/CD 파이프라인 표준화

브랜치 체계 수립(CHA/PKG/FAM), Dev → Stg → PP → Prod 배포 자동화. 코드 품질 3종(MR 자동 실행), MR Approval, Fortify SAST 보안 스캔 연동. ITSM(IT Square) 시스템과 연동해 배포 승인 플로우 구현.

### n8n 자동화 워크플로 4종

1. **라이선스 관리 자동화**: GitLab 라이선스 할당/회수 및 임계치 초과 알림
2. **권한 자동 처리**: 퇴사자·부서이동자 EAI DB 연동 → GitLab 권한 자동 변경
3. **AI 코드리뷰**: MR 생성 → n8n → Solar Pro vLLM → GitLab 코멘트 자동 등록
4. **파이프라인 알림**: 실패 감지 → Mattermost 채널 자동 알림

### GitLab 업그레이드 (폐쇄망)

고객사 내부망(에어갭) 환경에서 GitLab 17.8.7 → 17.11.7 버전 업그레이드. 업그레이드 중 Background Migration #613 파티션 누락 오류 발생 → gitlab-psql로 누락 파티션 수동 생성 및 Migration Job 상태 리셋으로 해결.

## 마일스톤

| 단계 | 완료 시점 |
|------|-----------|
| AS-IS 분석 완료 | 2025.09 |
| 아키텍처 설계 + 보안성 심의 통과 | 2025.10 |
| 채널SPA 운영 오픈 | 2025.12 |
| 잔여 시스템 전체 운영 오픈 | 2026.01 |
| 완료 보고서 제출 | 2026.02 |
