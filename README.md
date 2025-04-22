# anycast

## セットアップ

1. 依存関係のインストール

```bash
pnpm install
```

2. 環境変数の設定
`.env`ファイルを作成し、以下の環境変数を設定

```bash
NIJI_VOICE_API_KEY=your_api_key
```

## 使用方法

以下のコマンドを実行

```bash
pnpm generate
```

生成された音声は`output/output.mp3`に保存されます。

## 開発

- コードフォーマット
```bash
pnpm format
```

- リンターの実行
```bash
pnpm lint
```
