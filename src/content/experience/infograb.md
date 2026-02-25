---
company: "DevOps 전문기업"
role: "DevOps Engineer"
period: "2025.08 - 현재"
order: 1
description: "금융권 인터넷전문은행 대상 GitLab 기반 DevOps 플랫폼 구축 — 7개 시스템, 28개 Repo, 110명+ 개발자 대상 SVN→Git 전환 및 DevOps 도구셋 7종 구축"
techStack: ["GitLab", "n8n", "Prometheus", "Grafana", "Loki", "Keycloak", "Vault", "Mattermost", "Nginx"]
---

## 금융권 DevOps 플랫폼 구축

인터넷전문은행의 DevOps 전환을 위한 GitLab 기반 통합 플랫폼 구축 프로젝트 (2025.08 ~ 2026.02, 6개월).

### 주요 업무

- **DevOps 도구셋 7종 구축**: GitLab + Runner, Mattermost, n8n, Grafana/Prometheus/Loki, Keycloak(SSO·OTP 2FA), Vault(시크릿 관리) 전체 설계·구축
- **SVN → Git 형상관리 전환**: 7개 시스템, 28개 Repository, 110명+ 개발자 대상 전면 마이그레이션
- **CI/CD 파이프라인 표준화**: 브랜치 체계(CHA/PKG/FAM) 수립, Dev→Stg→PP→Prod 배포 자동화, 5개 시범 부서 100% 적용
- **ITSM 연동 배포 통제**: 기존 IT Square(ITSM) 시스템과 GitLab MR 기반 배포 승인 플로우 연동
- **n8n 자동화 워크플로 4종 구현**: 라이선스 관리, 퇴사자/부서이동 권한 자동 처리(EAI DB 연동), AI 코드리뷰(Solar Pro vLLM), 파이프라인 실패 알림
- **Observability 스택**: Grafana + Loki + Prometheus 기반 인프라·애플리케이션 통합 모니터링 구축
- **GitLab 업그레이드**: 폐쇄망(에어갭) 환경에서 17.8.7 → 17.11.7 버전 업그레이드 수행

### 기술적 특이점

- **폐쇄망(에어갭) 환경**: 케이뱅크 내부망에서 인터넷 차단 상태로 모든 구축·업그레이드 수행
- **AI 코드리뷰 자동화**: MR 생성 → n8n 트리거 → Solar Pro vLLM 분석 → GitLab 코멘트 자동 등록
- **증분 빌드 전략 설계**: 방카슈랑스 시스템 특성상 전체 빌드 불가 → 증분 빌드 로직 직접 설계·구현
- **GitLab 업그레이드 트러블슈팅**: Background Migration #613 파티션 누락 오류 → gitlab-psql 수동 파티션 생성으로 해결
