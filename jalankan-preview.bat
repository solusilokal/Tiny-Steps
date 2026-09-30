@echo off
title Tiny Steps Store - Preview Server
echo ==========================================================
echo   Menjalankan Preview Website Tiny Steps...
echo ==========================================================
echo.
echo Server akan aktif di http://localhost:3000
echo Tekan Ctrl+C di terminal ini jika ingin menghentikan server.
echo.
call npm.cmd run dev
pause
