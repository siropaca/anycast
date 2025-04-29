# anycast

テーマからポットキャスト風音声ファイルを作成する

## 必要条件

`.tool-versions` に記載

## セットアップ

1. 依存関係のインストール

```bash
pnpm install
```

2. 環境変数の設定
`.env`ファイルを作成し、以下の環境変数を設定

```bash
NIJI_VOICE_API_KEY=your_api_key
OPENAI_API_KEY=your_api_key
ANTHROPIC_API_KEY=your_api_key
```

## 使用方法

以下のコマンドを実行

```bash
pnpm generate
```

生成された音声は`output/output.mp3`に保存されます。

## 開発

- ビルド
```bash
pnpm build
```

- コードフォーマット
```bash
pnpm format
```

- リンターの実行
```bash
pnpm lint
```

- 依存関係の更新確認
```bash
pnpm ncu
```

## プロジェクト構成

- `src/` - ソースコード
- `bgm/` - BGMファイル
- `output/` - 生成された音声ファイル（自動生成）
- `temp/` - 一時ファイル（自動生成）
